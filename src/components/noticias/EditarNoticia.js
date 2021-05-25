import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import {useParams } from "react-router-dom";
//import Swal from 'sweetalert2';

const EditarNoticia = () => {
    //obtener parametro
    console.log(useParams().id);
    const codigoNoticia = useParams().id;

    //creo los state
    const [categoria, setCategoria] = useState('');
    const [errorValidacion, setErrorValidacion] = useState(false);
    const [noticia, setNoticia] = useState({});
    const URLnoticias = process.env.REACT_APP_API_URLnoticias+'/'+codigoNoticia;

    //creo las variables useRef
    const categoriaRef = useRef('');
    const fechaNoticiaRef = useRef('10/10/2021');
    const autorNoticiaRef = useRef('');
    const tituloNoticiaRef = useRef('');
    const noticiaBreveRef = useRef('');
    const noticiaDetalladaRef = useRef('');
    const imagenPrincipalRef = useRef('');
    const imagenSecRef = useRef('');
    const destacadaRef = useRef(false);


    useEffect(async()=>{
        try{
            const respuesta = await fetch(URLnoticias);
            if(respuesta.status === 200){
                const noticiaSolicitada = await respuesta.json();
                setNoticia(noticiaSolicitada);
            }

        }catch(error){
            console.log(error);
            //mostrar msj de error
        }
    },[])

    const handleSubmit = () =>{}


    return (
<Container className="container my-3 py-3 shadow-lg">
            <h2 className="text-center my-3 py-3 text-dark">Editar Producto</h2>

            <Form className='mx-5' onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Seleccione Categoría<span class="text-danger">*</span></Form.Label> 
                        <Form.Control as="select" size="sm" placeholder="Categoría"  onChange={(e) => setCategoria(e.target.value)}>
                            <option name="Categoria"></option>
                            <option name="Categoria" value='actualidad'>Actualidad</option>
                            <option name="Categoria" value='espectaculos'>Espectáculos</option>
                            <option name="Categoria" value='tecnologia'>Tecnología</option>
                            <option name="Categoria" value='deportes'>Deportes</option>
                            <option name="Categoria" value='fotografia'>Política</option>
                            <option name="Categoria" value='economia'>Economía</option>
                            <option name="Categoria" value='salud'>Salud</option>
                            <option name="Categoria" value='fotografia'>Fotografía</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Fecha<span class="text-danger">*</span></Form.Label>
                        <Form.Control type="date" size="sm" placeholder="dd/mm/aa" 
                        //onChange={(e) => setFechaNoticia(e.target.value)}
                        //defaultValue = {noticia,fechaNoticia}
                        //ref={fechaNoticiaRef}
                        />
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Autor<span class="text-danger">*</span></Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Autor" 
                        defaultValue ={noticia,autorNoticia}
                        ref={autorNoticia} 
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Titulo Noticia<span class="text-danger">*</span></Form.Label>
                    <Form.Control type="text" size="sm" placeholder="Titulo de la Noticia"  />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Breve<span class="text-danger">*</span></Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Descripción Breve"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Detallada<span class="text-danger">*</span></Form.Label>
                    <Form.Control as="textarea" rows={5} size="sm" placeholder="Descripción Detallada"/>
                </Form.Group>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Principal<span class="text-danger">*</span></Form.Label>
                        <Form.Control as="textarea" rows={1} placeholder="Imagen Principal"/>
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src="{noticiaCompleta.imagenPrincipal}" alt='Imagen Principal de la Noticia' />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                        <Form.Control as="textarea" rows={1} placeholder="Imagen Secundaria" />
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src="{noticiaCompleta.imagenSec}" alt='Imagen Secundaria de la Noticia' />
                    </Form.Group>
                </Form.Row>
                <Form.Group className='my-2 pb-2'>
                    <Form.Check type='checkbox' label='Noticia Destacada' />
                </Form.Group>

                <Button type='submit' className='w-100 text-light mt-3' variant="primary">Guardar</Button>
                {
                    errorValidacion === true ? (<Alert className='my-3' variant='warning'>Todos los campos son obligatorios</Alert>) : (null)
                }

            </Form>
        </Container>
    );
};

export default EditarNoticia;