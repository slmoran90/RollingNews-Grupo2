import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
// hoook para usar parametros
import { useParams } from "react-router-dom";

const NoticiaCompleta = () => {
    // obtener el parametro de la URL
    // console.log(useParams().id);
    const parametroID = useParams().id;
    // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias + "/?id=" + parametroID;
    
    // state para almacenar resultados del fetch
    const [noticiaCompleta, setNoticiaCompleta] = useState({});
    useEffect(()=>{
        consultarAPInoticias();
    },[])

    // toma los datos de la api
    const consultarAPInoticias = async ()=>{
        // buscar la noticia que tenga el ID pasado como parametro en la URL
        try {
            const respuesta = await fetch(URLnoticias);
            console.log(respuesta);
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
        <Container className="container my-3 py-3 shadow-lg">
            <h3 className="text-center my-3 py-3 bg-warning text-light">
            {/* {noticiaCompleta.tituloNoticia} */}
            Noticia Completa
            </h3>

            <Form className='mx-5'>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Categoría:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Categoría" defaultValue={noticiaCompleta.categoria} disabled />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="" defaultValue={noticiaCompleta.fechaNoticia} disabled/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Autor" defaultValue={noticiaCompleta.autorNoticia} disabled/>
                    </Form.Group>
                </Form.Row>

                
                <Form.Group>
                    <Form.Label>Titulo Noticia:</Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Titulo de la Noticia" defaultValue={noticiaCompleta.tituloNoticia} disabled />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Breve:</Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Descripción Breve" defaultValue={noticiaCompleta.noticiaBreve} disabled/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Detallada:</Form.Label>
                    <Form.Control as="textarea" rows={10} size="sm" placeholder="Descripción Detallada" defaultValue={noticiaCompleta.noticiaDetallada} disabled />
                </Form.Group>

                <Form.Row className='border mb-2'>
                    <Form.Group as={Col}>
                        <Form.Label>Imagen Principal:</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Imagen Principal" defaultValue={noticiaCompleta.imagenPrincipal} disabled/>
                    </Form.Group>

                    <Form.Group as={Col} className='text-center mt-3'>
                        <img width="300px" src={noticiaCompleta.imagenPrincipal} disabled/>
                    </Form.Group>
                </Form.Row>

                <Form.Row className='border'>
                    <Form.Group as={Col}>
                        <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Imagen Secundaria" defaultValue={noticiaCompleta.imagenSec} disabled />
                    </Form.Group>

                    <Form.Group as={Col} className='text-center mt-3'>
                        <img width="300px" src={noticiaCompleta.imagenSec} disabled/>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    {/* <Form.Label>Noticia Destacada:</Form.Label> */}
                    <Form.Check type='checkbox' label='Noticia Destacada' defaultValue={noticiaCompleta.noticiaDestacada} disabled />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                    Cerrar
                </Button>
            </Form>
        </Container>
    );
};

export default NoticiaCompleta;
