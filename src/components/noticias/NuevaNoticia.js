import React, { useState, useEffect, useRef } from 'react';
import { Alert, Container, Form, Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { withRouter, useHistory } from "react-router-dom";
//import {campoRequerido, validarFormatoFecha} from '../common/validaciones'
const NuevaNoticia = (props) => {
    const URLcategorias = process.env.REACT_APP_API_URLcategorias;
    const URLnoticias = process.env.REACT_APP_API_URLnoticias;
    const [categoria, setCategoria] = useState('');
    const [fechaNoticia, setFechaNoticia] = useState('');
    const [autorNoticia, setAutorNoticia] = useState('');
    const [tituloNoticia, setTituloNoticia] = useState('');
    const [noticiaBreve, setNoticiaBreve] = useState('');
    const [noticiaDetallada, setNoticiaDetallada] = useState('');
    const [imagenPrincipal, setImagenPrincipal] = useState('https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/02/error-404-1862483.jpg?itok=OUXEJayy');
    const [imagenSec, setImagenSec] = useState('https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/02/error-404-1862483.jpg?itok=OUXEJayy');
    const [destacada, setDestacada] = useState('off');
    let history = useHistory();
    // const [id, setId] = useState("1000");
    const [arrayCategorias, setArrayCategorias] = useState([]);
    const [errorValidacion, setErrorValidacion] = useState(false);
    const formRef = useRef(null);
    const handleReset = () => {
        formRef.current.reset();
        setImagenPrincipal('');
        setImagenSec('');
    };
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        //validar los datos
        if (autorNoticia.trim() === ''
            || fechaNoticia.trim() === ''
            || tituloNoticia.trim() === '' || noticiaBreve.trim() === '' || noticiaBreve.trim().length > 200 || noticiaDetallada.trim() === '' ||
            categoria === '' || imagenPrincipal === ''
        ) {
            //si falla la validacion mostrar alert de error
            setErrorValidacion(true);
            return;
        } else {
            //si sta todo bien, envio los datos a la API
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
                    //mostrar cartel al usuario
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
    return (
        <Container className="margenFondo py-3">
            <h2 className="text-center my-3 py-3 formTitulos">Nueva Noticia</h2>
            <Form ref={formRef} className='mx-5' onSubmit={handleSubmit}>
                <Form.Row>
                    {/* select armado desde APIcategorias */}
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Categoría<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" as="select" size="sm" placeholder="Categoría" onChange={(e) => setCategoria(e.target.value)} required>
                            <option>Seleccione una Categoría...</option>
                            {
                                arrayCategorias.map((opcion, indice) => (<option value={opcion.value} key={indice}>{opcion.nombreCategoria}</option>))
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Fecha<span class="text-danger">*</span></Form.Label>
                        <Form.Control className="outlineColor" type="date" size="sm" placeholder="dd/mm/aaaa"
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
                        <Form.Control className="outlineColor" as="textarea" rows={3} placeholder="Imágen Principal" onChange={(e) => setImagenPrincipal(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        {/* <Image className='w-75' src={imagenPrincipal} alt='Imagen Principal de la Noticia' /> */}
                        <div className='w-75 imageHolderForm  py-5' style={{ 'background': `url(${imagenPrincipal}) 20% 1% / cover no-repeat` }}>
                        </div>
                        {/* sistema Gonza */}
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Secundaria (Opcional)</Form.Label>
                        <Form.Control className="outlineColor" as="textarea" rows={3} placeholder="Imágen Secundaria" onChange={(e) => setImagenSec(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        {/* <Image className='w-75' src={imagenSec}  alt='Imagen Secundaria de la Noticia' /> */}
                        <div className='w-75 imageHolderForm py-5' style={{ 'background': `url(${imagenSec}) 20% 1% / cover no-repeat` }}>
                        </div>
                    </Form.Group>
                </Form.Row>
                <Form.Group className='my-2 pb-2'>
                    <Form.Check type='checkbox' label='Noticia Destacada' onChange={(e) => setDestacada(e.target.value)} />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <button type='submit' className='botonGuardar'>Guardar</button>
                    {
                        errorValidacion === true ? (<Alert className='text-danger my-3' variant='secondary'><b>* Todos los campos son obligatorios</b></Alert>) : (null)
                    }
                </div>
            </Form>
        </Container>
    );
};

export default withRouter(NuevaNoticia);
