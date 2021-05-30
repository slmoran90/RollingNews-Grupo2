import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import {useParams, withRouter } from "react-router-dom";
import Swal from 'sweetalert2';
import {campoRequerido} from '../common/validaciones';


const EditarNoticia = (props) => {
    //obtener parametro
    //console.log(useParams().id);
    const codigoNoticia = useParams().id;

    //creo los state
    const [categoria, setCategoria] = useState('');
    const [errorValidacion, setErrorValidacion] = useState(false);
    const [noticia, setNoticia] = useState({});
    const URLnoticias = process.env.REACT_APP_API_URLnoticias+'/'+codigoNoticia;
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
    const destacadaRef = useRef(false);

    const [arrayCategorias, setArrayCategorias] = useState([]);

    useEffect(async()=>{
        consultarAPIcategorias();
        try{
            const respuesta = await fetch(URLnoticias);
            if(respuesta.status === 200){
                const noticiaSolicitada = await respuesta.json();
                setNoticia(noticiaSolicitada);
                // console.log('noticia solicitada', noticiaSolicitada);
            }

        }catch(errorValidacion){
            console.log(errorValidacion);
            //mostrar msj de error
        }
    },[])

    // === Para armar select categorias existentes
    const consultarAPIcategorias = async () => {
        try {
            const respuesta = await fetch(URLcategorias);
            if (respuesta.status === 200) {
                const listaCategorias = await respuesta.json();
                setArrayCategorias(listaCategorias);
            }
        } catch (errorValidacion) {
            console.log(errorValidacion);
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        let categoriaModificada = (categoria === '')?(noticia.categoria):(noticia);
        //console.log(tituloNoticiaRef.current.value);
        //validar los datos
        if(campoRequerido(autorNoticiaRef.current.value) 
        //&& validarFormatoFecha(parseFloat(fechaNoticiaRef.current.value))
        && campoRequerido(autorNoticiaRef.current.value) && campoRequerido(tituloNoticiaRef.current.value)
        && campoRequerido(noticiaBreveRef.current.value) && campoRequerido(noticiaDetalladaRef.current.value)
        && campoRequerido(imagenPrincipalRef.current.value)
        && campoRequerido(categoriaModificada)
        ){
            //si son correctos hago el request
            setErrorValidacion(false);
            try{
                const noticiaModificada = {
                    tituloNoticia: tituloNoticiaRef.current.value,
                    noticiaBreve: noticiaBreveRef.current.value,
                    noticiaDetallada: noticiaDetalladaRef.current.value,
                    imagenPrincipal: imagenPrincipalRef.current.value,
                    categoria: categoriaModificada,
                    autorNoticia: autorNoticiaRef.current.value,
                    fechaNoticia: fechaNoticiaRef.current.value,
                    destacada: destacadaRef.current.value
                }
                const respuesta = await fetch(URLnoticias,{
                    method:'PUT',
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(noticiaModificada)
                });
                console.log(respuesta);
                if(respuesta.status === 200){
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

            }catch(errorValidacion){
                console.log(errorValidacion);
                //mostrar cartel al usuario
                Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
            }

        }else{
            //si no muestro cartel de error
            setErrorValidacion(true);
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }

    }


    return (
<Container className="container my-3 py-3 shadow-lg">
            <h2 className="text-center my-3 py-3 text-dark">Editar Producto</h2>

            <Form className='mx-5' onSubmit={handleSubmit}>
                <Form.Row>
                    {/* select armado desde APIcategorias */}
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Categoría<span class="text-danger">*</span></Form.Label>
                        <Form.Control as="select" size="sm" placeholder="Categoría"
                        defaultValue = {noticia.categoria}
                        ref={categoriaRef}
                        value= {noticia.categoria}
                        >
                            {
                            arrayCategorias.map((opcion, indice) => (<option value={opcion.value} selected key={indice}>{opcion.nombreCategoria}</option>))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Fecha<span class="text-danger">*</span></Form.Label>
                        <Form.Control type="date" size="sm" placeholder="dd/mm/aa" 
                        // onChange={(e) => setFechaNoticia(e.target.value)}
                        defaultValue = {noticia.fechaNoticia}
                        ref={fechaNoticiaRef}
                        />
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Autor<span class="text-danger">*</span></Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Autor" 
                        defaultValue ={noticia.autorNoticia}
                        ref={tituloNoticiaRef} 
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Titulo Noticia<span class="text-danger">*</span></Form.Label>
                    <Form.Control type="text" size="sm" placeholder="Titulo de la Noticia"  
                    defaultValue ={noticia.tituloNoticia}
                    ref={autorNoticiaRef} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Breve<span class="text-danger">*</span></Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Descripción Breve"
                    defaultValue ={noticia.noticiaBreve}
                    ref={noticiaBreveRef} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Detallada<span class="text-danger">*</span></Form.Label>
                    <Form.Control as="textarea" rows={5} size="sm" placeholder="Descripción Detallada"
                    defaultValue ={noticia.noticiaDetallada}
                    ref={noticiaDetalladaRef}
                    />
                </Form.Group>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Principal<span class="text-danger">*</span></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Imagen Principal"
                        defaultValue ={noticia.imagenPrincipal}
                        ref={imagenPrincipalRef}/>
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src={noticia.imagenPrincipal} alt='Imagen Principal de la Noticia' 
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Imagen Secundaria" 
                        defaultValue ={noticia.imagenSec}
                        ref={imagenSecRef}
                        />
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src={noticia.imagenSec} alt='Imagen Secundaria de la Noticia' 
                        />
                    </Form.Group>
                </Form.Row>
                {/* <Form.Group className='my-2 pb-2'>
                    <Form.Check type='checkbox' label='Noticia Destacada' 
                    defaultChecked ={noticia.destacada}/>
                </Form.Group> */}

                <Form.Group className='my-2 pb-2'>
                    {
                    (noticia.destacada === 'on') ? <Form.Check type='checkbox' label='Noticia Destacada' checked /> : <Form.Check type='checkbox' label='Noticia Destacada'  />
                    }
                    
                </Form.Group>

                <Button type='submit' className='w-100 text-light mt-3' variant="primary">Guardar</Button>
                {
                    errorValidacion === true ? (<Alert className='my-3' variant='warning'>Todos los campos son obligatorios</Alert>) : (null)
                }

            </Form>
        </Container>
    );
};

export default withRouter(EditarNoticia);