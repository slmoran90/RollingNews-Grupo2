import React, { useState, useEffect, useRef } from 'react';
import { Alert, Container, Form, FormCheck } from 'react-bootstrap';
import { useParams, withRouter } from "react-router-dom";
import Swal from 'sweetalert2';
import { campoRequerido } from '../common/validaciones';
// libreria para trabajar con fechas
import moment from 'moment';
import 'moment/locale/es'; 

const EditarNoticia = (props) => {
    //obtener parametro
    const codigoNoticia = useParams().id;

    //creo los state
    const [categoria, setCategoria] = useState('');
    const [errorValidacion, setErrorValidacion] = useState(false);
    const [noticia, setNoticia] = useState({});
    //valor noticia destacada
    const [destacada, setDestacada] = useState('');

    // const URLnoticias = process.env.REACT_APP_API_URLnoticias+'/'+codigoNoticia;
    const URLnoticias = process.env.REACT_APP_API_URLnoticias + '/noticias-por-id/' + codigoNoticia;

    const URLcategorias = process.env.REACT_APP_API_URLcategorias;

    //creo las variables useRef
    const tituloNoticiaRef = useRef('');
    const noticiaBreveRef = useRef('');
    const noticiaDetalladaRef = useRef('');
    const imagenPrincipalRef = useRef('');
    const imagenSecRef = useRef('');
    const categoriaRef = useRef('');
    const autorNoticiaRef = useRef('');
    const fechaNoticiaRef = useRef('');

    const [arrayCategorias, setArrayCategorias] = useState([]);

    useEffect(async () => {
        consultarAPIcategorias();

        //trae la noticia a editar
        try {
            const respuesta = await fetch(URLnoticias);
            if (respuesta.status === 200) {
                const noticiaSolicitada = await respuesta.json();
                setNoticia(noticiaSolicitada);
                
                console.log(noticia.fechaNoticia)
                console.log(moment(noticia.fechaNoticia).locale('es').format("DD-MM-YYYY"))
                
            }
        } catch (errorValidacion) {
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    }, [])

    // === Para armar select categorias existentes
    const consultarAPIcategorias = async () => {
        try {
            const respuesta = await fetch(URLcategorias);
            if (respuesta.status === 200) {
                const listaCategorias = await respuesta.json();
                setArrayCategorias(listaCategorias);
            }
        } catch (errorValidacion) {
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // si el campo categoria es vacio, toma el valor que tenia, sino toma el nuevo valor
        let destacadaModificada = (destacada === '') ? (noticia.destacada) : (destacada);
        
        //validar los datos
        if (campoRequerido(autorNoticiaRef.current.value)
            && campoRequerido(fechaNoticiaRef.current.value) 
            && campoRequerido(tituloNoticiaRef.current.value)
            && campoRequerido(noticiaBreveRef.current.value) 
            && campoRequerido(noticiaDetalladaRef.current.value)
            && campoRequerido(imagenPrincipalRef.current.value)
            && campoRequerido(destacadaModificada)){
            
            setErrorValidacion(false);
            try {
                const noticiaModificada = {
                    tituloNoticia: tituloNoticiaRef.current.value,
                    noticiaBreve: noticiaBreveRef.current.value,
                    noticiaDetallada: noticiaDetalladaRef.current.value,
                    imagenPrincipal: imagenPrincipalRef.current.value,
                    imagenSec: imagenSecRef.current.value,
                    categoria: categoriaRef.current.value, 
                    autorNoticia: autorNoticiaRef.current.value,
                    //fechaNoticia: fechaNoticiaRef.current.value.moment().format("DD MMMM, YYYY"),
                    fechaNoticia: fechaNoticiaRef.current.value,
                    destacada: destacadaModificada
                }

                const respuesta = await fetch(URLnoticias, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(noticiaModificada)
                });
                if (respuesta.status === 200) {
                    //se actualizaron los datos en la API
                    Swal.fire(
                        'Noticia Modificada',
                        'Se actualizaron los datos de la noticia',
                        'success'
                    )
                    //consultar API
                    props.consultarAPInoticias();
                    //redireccionar
                    props.history.push('/noticias/listar');
                }

            } catch (errorValidacion) {
                //mostrar cartel al usuario
                Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
            }

        } else {
            //si no muestro cartel de error
            setErrorValidacion(true);
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    }

    const cambiarDestacada = (e) => {
        setDestacada(e.target.value);
    };

    // const formatoFecha = ()=>{
    //     //libreria moment
    //     console.log("libreria MOMENT")
    //     const m = moment();
    //     console.log(m.toString());
    //     console.log(moment(noticia.fechaNoticia).format('dd-mm-YYYY'))
    // }


    return (
        <div className="margenFondo py-3">
            <Container className="my-3 ">
                <h2 className="text-center my-3 py-3 formTitulos">Editar Noticia</h2>

                <Form className='mx-5' onSubmit={handleSubmit}>
                    <Form.Row>
                        {/* select armado desde APIcategorias */}
                        <Form.Group className='col-sm-6 col-md-4'>
                            <Form.Label>Categoría<span class="text-danger">*</span></Form.Label>
                            <Form.Control className="outlineColor" as="select" size="sm" placeholder="Categoría"
                                defaultValue = {noticia.categoria}
                                ref={categoriaRef}>
                                <option>{noticia.categoria}</option>
                                {
                                    arrayCategorias.map((opcion, indice) => (
                                        <option key={indice}>{opcion.nombreCategoria}</option>)
                                    )
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className='col-sm-6 col-md-4'>
                            <Form.Label>Fecha<span class="text-danger">*</span></Form.Label>
                            <Form.Control className="outlineColor" type="text" size="sm"
                                //defaultValue={noticia.fechaNoticia}
                                defaultValue={moment(noticia.fechaNoticia).locale('es').format("DD-MM-YYYY")}
                                ref={fechaNoticiaRef}
                            />
                        </Form.Group>

                        <Form.Group className='col-sm-6 col-md-4'>
                            <Form.Label>Autor<span class="text-danger">*</span></Form.Label>
                            <Form.Control className="outlineColor" type="text" size="sm" placeholder="Autor"
                                defaultValue={noticia.autorNoticia}
                                ref={autorNoticiaRef}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Label>Titulo Noticia (Max 150 caracteres)<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" type="text" size="sm" placeholder="Titulo de la Noticia"
                            defaultValue={noticia.tituloNoticia}
                            ref={tituloNoticiaRef} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Noticia Breve (Max 200 caracteres)<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" as="textarea" rows={3} size="sm" placeholder="Descripción Breve"
                            defaultValue={noticia.noticiaBreve}
                            ref={noticiaBreveRef} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Noticia Detallada<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" as="textarea" row={5} size="sm" placeholder="Descripción Detallada"
                            defaultValue={noticia.noticiaDetallada}
                            ref={noticiaDetalladaRef}
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group className='col-sm-12 col-md-8'>
                            <Form.Label>Imagen Principal<span class="text-danger">*</span></Form.Label>
                            <Form.Control className="outlineColor"  as="textarea" row={5} placeholder="Imagen Principal"
                                defaultValue={noticia.imagenPrincipal}
                                ref={imagenPrincipalRef} />
                        </Form.Group>
                        <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                            <img className='w-75' src={noticia.imagenPrincipal} alt='Imagen Principal de la Noticia'/> 
                            {/* <div className='w-75 imageHolderForm py-5' style={{ 'background': `url(${noticia.imagenPrincipal}) 20% 1% / cover no-repeat` }}>
                            </div> */}
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group className='col-sm-12 col-md-8'>
                            <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                            <Form.Control className="outlineColor"  as="textarea" row={5} placeholder="Imagen Secundaria"
                                defaultValue={noticia.imagenSec}
                                ref={imagenSecRef}
                            />
                        </Form.Group>
                        <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                            <img className='w-75' src={noticia.imagenSec} alt='Imagen Secundaria de la Noticia'/> 
                            {/* <div className='w-75 imageHolderForm py-5' style={{ 'background': `url(${noticia.imagenSec}) 20% 1% / cover no-repeat` }}>
                            </div> */}
                        </Form.Group>
                    </Form.Row>
                    
                    <span className="my-2 pb-2">Noticia Destacada:  </span>
                    <span>
                        <FormCheck
                            name="detacada"
                            type="radio"
                            inline
                            label="  Sí"
                            value="on"
                            onChange={cambiarDestacada}
                            defaultChecked={noticia.destacada && noticia.destacada === 'on'}
                        ></FormCheck>
                        <FormCheck
                            name="detacada"
                            type="radio"
                            inline
                            label="  No"
                            value="off"
                            onChange={cambiarDestacada}
                            defaultChecked={noticia.destacada && noticia.destacada === 'off'}
                        ></FormCheck>
                    </span>    

                    <div className='d-flex justify-content-center'>
                        <button type='submit' className='botonGuardar'>Guardar Cambios</button>
                        {
                            errorValidacion === true ? (<Alert className='text-danger my-3' variant='secondary'><b>* Todos los campos son obligatorios</b></Alert>) : (null)
                        }
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default withRouter(EditarNoticia);