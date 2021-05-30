import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
// hoook para usar parametros
import { useParams, Link } from "react-router-dom";

const MostrarNoticia = () => {
    // obtener el parametro de la URL
    // console.log(useParams().id);
    const parametroID = useParams().id;
    // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias + "/?id=" + parametroID;
    
    //=== state para almacenar resultados del fetch
    const [noticiaCompleta, setNoticiaCompleta] = useState({});

    useEffect(() => {
        consultarAPInoticias();
    }, [])

    // toma los datos de la api
    const consultarAPInoticias = async () => {
        // buscar la noticia que tenga el ID pasado como parametro en la URL
        try {
            const respuesta = await fetch(URLnoticias);
            if (respuesta.status === 200) {
                const noticiaFiltrada = await respuesta.json();
                setNoticiaCompleta(noticiaFiltrada[0]);
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    }

    return (
        <div className="main-form">
        <Container className="py-3">
            <h2 className="text-center my-3 py-3">Mostrar Noticia Completa</h2>

        {/* <Container className='margenListaNoticias'> */}
            <Form className='mx-5'>
                <Form.Row>
                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Categoría:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Categoría" defaultValue={noticiaCompleta.categoria} disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="" defaultValue={noticiaCompleta.fechaNoticia} disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-6 col-md-4'>
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Autor" defaultValue={noticiaCompleta.autorNoticia} disabled />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Titulo Noticia:</Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Titulo de la Noticia" defaultValue={noticiaCompleta.tituloNoticia} disabled />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Noticia Breve:</Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Noticia Breve" defaultValue={noticiaCompleta.noticiaBreve} disabled />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Noticia Detallada:</Form.Label>
                    <Form.Control as="textarea" rows={10} size="sm" placeholder="Noticia Detallada" defaultValue={noticiaCompleta.noticiaDetallada} disabled />
                </Form.Group>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Principal:</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Imagen Principal" defaultValue={noticiaCompleta.imagenPrincipal} disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src={noticiaCompleta.imagenPrincipal} alt='Imagen Principal de la Noticia' />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className='col-sm-12 col-md-8'>
                        <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Imagen Secundaria" defaultValue={noticiaCompleta.imagenSec} disabled />
                    </Form.Group>

                    <Form.Group className='col-sm-12 col-md-4 align-self-center d-flex justify-content-center'>
                        <img className='w-75' src={noticiaCompleta.imagenSec} alt='Imagen Principal de la Noticia' />
                    </Form.Group>
                </Form.Row>
                <Form.Group className='my-2 pb-2'>
                    {
                    (noticiaCompleta.destacada ==='on') ? <Form.Check type='checkbox' label='Noticia Destacada' checked disabled /> : <Form.Check type='checkbox' label='Noticia Destacada' disabled />
                    }     
                </Form.Group>
                
                <Link className='btn botones w-100 mt-3' to={'/noticias/listar/' + noticiaCompleta.categoria}> Volver a Noticias por Categoría</Link>
            </Form>
        </Container>
        </div>
    );
};

export default MostrarNoticia;
