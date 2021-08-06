import React, { useState, useEffect } from "react";
import { Container, Form,FormCheck } from "react-bootstrap";
import Swal from "sweetalert2";
// hoook para usar parametros
import { useParams, Link } from "react-router-dom";

const MostrarNoticia = () => {
    // obtener el parametro de la URL
    // console.log(useParams().id);
    const parametroID = useParams().id;
    // URL donde estan almacenadas las noticias
    // const URLnoticias = process.env.REACT_APP_API_URLnoticias + "/?id=" + parametroID;
    const URLnoticias = process.env.REACT_APP_API_URLnoticias + "/noticias-por-id/" + parametroID;
    
    //=== state para almacenar resultados del fetch
    const [noticiaCompleta, setNoticiaCompleta] = useState({});

    useEffect(() => {
        consultarAPInoticias();
    }, [])

    // repite el codigo de consultarAPInoticias, no lo recibe por props porque la URL cambia
    const consultarAPInoticias = async () => {
        // buscar la noticia que tenga el ID pasado como parametro en la URL
        try {
            const respuesta = await fetch(URLnoticias);
            if (respuesta.status === 200) {
                const noticiaFiltrada = await respuesta.json();
                setNoticiaCompleta(noticiaFiltrada);
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    }

    return (
        <div className="margenFondo">
        <Container className="py-3">
            <h2 className="text-center my-3 py-3 formTitulos">Mostrar Noticia Completa</h2>

            <Form className='mx-5'>
                <Form.Row>
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Categoría<span class="text-danger">*</span></Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Categoría" className="outlineColor"  defaultValue={noticiaCompleta.categoria} disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Fecha<span class="text-danger">*</span></Form.Label>
                        <Form.Control   
                            type="text"   
                            size="sm" 
                            className="outlineColor" 
                            //defaultValue={noticiaCompleta.fechaNoticia.substring(8,10)+'-'+noticiaCompleta.fechaNoticia.substring(5,7)+'-'+noticiaCompleta.fechaNoticia.substring(0,4)}
                            defaultValue={noticiaCompleta.fechaNoticia}
                            disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Autor<span class="text-danger">*</span></Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Autor" className="outlineColor" defaultValue={noticiaCompleta.autorNoticia} disabled />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Titulo Noticia<span class="text-danger">*</span></Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Titulo de la Noticia" className="outlineColor"  defaultValue={noticiaCompleta.tituloNoticia} disabled />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Noticia Breve<span class="text-danger">*</span></Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Noticia Breve" className="outlineColor"  defaultValue={noticiaCompleta.noticiaBreve} disabled />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Noticia Detallada<span class="text-danger">*</span></Form.Label>
                    <Form.Control as="textarea" rows={10} size="sm" placeholder="Noticia Detallada" className="outlineColor"  defaultValue={noticiaCompleta.noticiaDetallada} disabled />
                </Form.Group>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Principal<span class="text-danger">*</span></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Imagen Principal" className="outlineColor"  defaultValue={noticiaCompleta.imagenPrincipal} disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src={noticiaCompleta.imagenPrincipal} alt='Imagen Principal de la Noticia' />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Imagen Secundaria" className="outlineColor"  defaultValue={noticiaCompleta.imagenSec} disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src={noticiaCompleta.imagenSec} alt='Imagen Secundaria de la Noticia' />
                    </Form.Group>
                </Form.Row>
                {/* <Form.Group className='my-2 pb-2'>
                    {
                    (noticiaCompleta.destacada ==='on') ? <Form.Check type='checkbox' label='Noticia Destacada' checked disabled /> : <Form.Check type='checkbox' label='Noticia Destacada' disabled />
                    }     
                </Form.Group> */}

                <span className="my-2 pb-2">Noticia Destacada:  </span>
                    <span>
                        <FormCheck
                            name="detacada"
                            type="radio"
                            inline
                            label="  Sí"
                            value="on"
                            // onChange={cambiarDestacada}
                            defaultChecked={noticiaCompleta.destacada && noticiaCompleta.destacada === 'on'}
                        ></FormCheck>
                        <FormCheck
                            name="detacada"
                            type="radio"
                            inline
                            label="  No"
                            value="off"
                            // onChange={cambiarDestacada}
                            defaultChecked={noticiaCompleta.destacada && noticiaCompleta.destacada === 'off'}
                        ></FormCheck>
                    </span>

                <div className='d-flex justify-content-center'> 
                    <Link className='btn mt-3 mb-2 botonGuardar' size='lg' to={'/noticias/listar/' + noticiaCompleta.categoria}> Volver a Noticias por Categoría</Link>
                </div> 
            </Form>
        </Container>
        </div>
    );
};

export default MostrarNoticia;
