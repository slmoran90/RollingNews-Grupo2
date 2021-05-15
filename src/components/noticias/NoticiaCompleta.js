import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
// hoook para usar parametros
import { useParams } from "react-router-dom";

const NoticiaCompleta = (props) => {
    // obtener el parametro de la URL
    console.log(useParams().id);
    const parametroID = useParams().id;

    // state para almacenar resultados del fetch
    const [noticiaCompleta, setNoticiaCompleta] = useState({});
    // const [noticiaFiltrada, setNoticiaFiltrada] = useState([]);

    // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias + "/?id=" + parametroID;

    useEffect(async () => {
        // buscar la noticia que tenga el ID pasado como parametro en la URL
        try {
            const respuesta = await fetch(URLnoticias);
            console.log(respuesta);
            if (respuesta.status === 200) {
                const noticiaFiltrada = await respuesta.json();

                //!!!!!! visto con facu !!!!!!!!!!!!!!!!!!!!
                const [noticia] = noticiaFiltrada;
                console.log("valor NOTICIA=",noticia);
                setNoticiaCompleta(noticia);
                //===================

            }
        } catch (error) {
            console.log(error);
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    }, []);
    return (
        <Container className="container my-3 py-3 shadow-lg">
            <h1 className="text-center my-3 py-3 bg-warning text-light">
                TITULO NOTICIA COMPLETA
            </h1>

            <Form className='mx-5'>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control type="text" placeholder="Autor" defaultValue={noticiaCompleta.autorNoticia}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Categoría:</Form.Label>
                    <Form.Control type="text" placeholder="Categoría" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Titulo Noticia:</Form.Label>
                    <Form.Control type="text" placeholder="Titulo de la Noticia"  />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Breve:</Form.Label>
                    <Form.Control type="text" placeholder="Descripción Breve" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Detallada:</Form.Label>
                    <Form.Control type="text" placeholder="Descripción Detallada"  />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Imagen Principal:</Form.Label>
                    <Form.Control type="text" placeholder="Imagen Principal"  />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                    <Form.Control type="text" placeholder="Imagen Secundaria" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default NoticiaCompleta;
