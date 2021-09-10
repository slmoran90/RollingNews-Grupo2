import React, { useState, useEffect, useRef } from 'react';
import { Alert, Container, Form, FormCheck, Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { withRouter, useHistory } from "react-router-dom";
// libreria para trabajar con fechas
import moment from 'moment';
import 'moment/locale/es'; 

const NuevaNoticia = (props) => {
    const URLcategorias = process.env.REACT_APP_API_URLcategorias;
    const URLnoticias = process.env.REACT_APP_API_URLnoticias;
    const [categoria, setCategoria] = useState('');
    const [fechaNoticia, setFechaNoticia] = useState(moment().format("DD-MM-YYYY"));
    const [autorNoticia, setAutorNoticia] = useState('');
    const [tituloNoticia, setTituloNoticia] = useState('');
    const [noticiaBreve, setNoticiaBreve] = useState('');
    const [noticiaDetallada, setNoticiaDetallada] = useState('');
    const [imagenPrincipal, setImagenPrincipal] = useState('https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/02/error-404-1862483.jpg?itok=OUXEJayy');
    const [imagenSec, setImagenSec] = useState('');
    const [destacada, setDestacada] = useState('off');

    let history = useHistory();
    const [arrayCategorias, setArrayCategorias] = useState([]);
    const [errorValidacion, setErrorValidacion] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        consultarAPIcategorias();
        if (props.adminUser !== true) {
            history.push("/");
        }
    }, []);
    
    // === Para armar select categorias existentes
    const consultarAPIcategorias = async () => {
        try {
            const respuesta = await fetch(URLcategorias);
            if (respuesta.status === 200) {
                const listaCategorias = await respuesta.json();
                setArrayCategorias(listaCategorias);
            }
        } catch (error) {
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    };

    const handleReset = () => {
        formRef.current.reset();
        setImagenPrincipal('');
        setImagenSec('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //validar los datos
        if (autorNoticia.trim() === ''
            || fechaNoticia.trim() === ''
            || tituloNoticia.trim() === '' || tituloNoticia.trim().length > 150 ||
            noticiaBreve.trim() === '' || noticiaBreve.trim().length > 200 ||
            noticiaDetallada.trim() === '' ||
            categoria === '' || imagenPrincipal === ''
        ) {
            setErrorValidacion(true);
            return;
        } else {
            setErrorValidacion(false);
            //crear objeto
            const noticia = {
                tituloNoticia,
                noticiaBreve,
                noticiaDetallada,
                imagenPrincipal,
                imagenSec,
                categoria,
                autorNoticia,
                fechaNoticia,
                destacada
            }
            try {
                const datosEnviar = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(noticia)
                }
                const respuesta = await fetch(URLnoticias, datosEnviar);
                if (respuesta.status === 201) {
                    Swal.fire(
                        'Guardado',
                        'Se registro una nueva noticia',
                        'success'
                    )
                    //otras tareas
                    props.consultarAPInoticias();
                    //limpiar imputs
                    handleReset();
                }
            } catch (error) {
                Swal.fire(
                    'Ocurrio un error',
                    'Inténtelo en unos minutos',
                    'error'
                )
            }
        }
    };

    const cambiarDestacada = (e) => {
        setDestacada(e.target.value);
    };
    //---------------------------------------------------------

    return (
        <Container className="margenFondo py-3">
            <h2 className="text-center my-3 py-3 formTitulos">Nueva Noticia</h2>
            <Form ref={formRef} className='mx-5' onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Categoría<span class="text-danger">*</span></Form.Label>
                        <Form.Control
                            as="select"
                            defaultValue="Seleccione una Categoria"
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option>Seleccione una Categoria</option>
                            {arrayCategorias.map((opcion, indice) => (
                                <option
                                    key={opcion._id}
                                    value={opcion.nombreCategoria}
                                >
                                    {opcion.nombreCategoria}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Fecha<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" type="date" size="sm" placeholder="dd-mm-yyyy" 
                            onChange={(e) => setFechaNoticia(e.target.value)}
                            required />
                    </Form.Group>
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Autor<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" type="text" size="sm" placeholder="Autor" onChange={(e) => setAutorNoticia(e.target.value)} required />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Titulo Noticia (Max 150 caracteres)<span class="text-danger">*</span></Form.Label>
                    <Form.Control className="outlineColor" type="text" size="sm" placeholder="Titulo de la Noticia" onChange={(e) => setTituloNoticia(e.target.value)} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Noticia Breve (Max 200 caracteres)<span class="text-danger">*</span></Form.Label>
                    <Form.Control className="outlineColor" as="textarea" rows={3} size="sm" placeholder="Noticia Breve" onChange={(e) => setNoticiaBreve(e.target.value)} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Noticia Detallada<span class="text-danger">*</span></Form.Label>
                    <Form.Control className="outlineColor" as="textarea" rows={5} size="sm" placeholder="Noticia Detallada" onChange={(e) => setNoticiaDetallada(e.target.value)} required />
                </Form.Group>
                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Principal<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" as="textarea" rows={5} placeholder="Imágen Principal" onChange={(e) => setImagenPrincipal(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <Image className='w-75' src={imagenPrincipal} alt='Imagen Principal de la Noticia' />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Secundaria (Opcional)</Form.Label>
                        <Form.Control className="outlineColor" as="textarea" rows={5} placeholder="Imágen Secundaria" onChange={(e) => setImagenSec(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <Image className='w-75' src={imagenSec}  alt='Imagen Secundaria de la Noticia' />
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
                    ></FormCheck>
                    <FormCheck
                        name="detacada"
                        type="radio"
                        inline
                        label="  No"
                        value="off"
                        onChange={cambiarDestacada}
                    ></FormCheck>
                </span>

                <div className='d-flex justify-content-center'>
                    <button type='submit' className='botonGuardar'>Guardar</button>
                    {
                        errorValidacion === true ? (<Alert className='text-danger my-3' variant='secondary'><b>* Todos los campos son obligatorios. Verifique longitud máxima permitida.</b></Alert>) : (null)
                    }
                </div>
            </Form>
        </Container>
    );
};

export default withRouter(NuevaNoticia);
