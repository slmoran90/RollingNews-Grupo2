import React, { useState } from "react";
import { Container, Form, Button, Col, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import {
    campoReq,
    validarEmail,
    validarTextArea,
    validarConsulta
} from "../components/common/validaciones";
import { withRouter } from "react-router-dom";
const Contacto = () => {
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");
    const [error, setError] = useState(false);
    const [tipoConsulta, setTipoConsulta] = useState("");
    const enviarMail = (e) => {
        console.log("dentro de enviarmail");
        emailjs.sendForm(
            "service_9vethkv",
            "template_p8vmf2q",
            e.target,
            "user_sKLjQ13C83jmRiaPuDwAn"
        )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            campoReq(nombreCompleto.trim()) &&
            validarEmail(email) &&
            validarTextArea(textArea) &&
            validarConsulta(tipoConsulta)
        ) {
            console.log("funca todo");
            enviarMail(e);
            setError(false);
        } else {
            setError(true);
        }
        e.target.reset();
    };
    return (
        <Container className="margenFondo">
            <Form.Row>
                <Col className="mx-3">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center">¿En qué te podemos ayudar?</h2>
                        <hr />
                        <Form.Group>
                            <Form.Label>¿que tipo de consulta es? *</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(e) => setTipoConsulta(e.target.value)}
                                required
                                name="tipoConsulta"
                            >
                                <option>Problemas con la página</option>
                                <option>Mala redacción</option>
                                <option>Información equivocada</option>
                                <option>Otros</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Nombre Completo * </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Juan Perez"
                                onChange={(e) => setNombreCompleto(e.target.value)}
                                required
                                minLength={6}
                                name="nombreCompleto"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Email * </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Juanperez@hotmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Escriba su consulta *</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                onChange={(e) => setTextArea(e.target.value)}
                                required
                                minLength={10}
                                maxLength={250}
                                name="textArea"
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="w-50 my-4">
                            Enviar
            </Button>
                    </Form>
                    {error === true ? (
                        <Alert variant="warning"> Todos los campos son Obligatorios </Alert>
                    ) : null}
                </Col>
                <Col className="mx-5 px-5">
                    <article>
                        <div>
                            <h5 className="text-primary">Whatsapp</h5>
                            <p>También puedes contactarnos desde tu teléfono!</p>
                            <p>(0381) 300866</p>
                            <p>Si tu información será publicada, cuidaremos tu itentidad.</p>
                        </div>
                        <hr />
                        <div>
                            <h5 className="text-primary">
                                ¿Cómo puedo publicar en su página?
                            </h5>
                            <p>Para avisos fúnebres aquí</p>
                            <p>Para avisos clasificados aquí</p>
                        </div>
                        <hr />
                        <div>
                            <h5 className="text-primary">
                                Para publicitar en nuestra página
                            </h5>
                            <p>Sigue este link</p>
                        </div>
                        <hr />
                        <div>
                            <h5 className="text-primary">Nuestra ubicación</h5>
                            <p>Crisostómo 514</p>
                        </div>
                    </article>
                </Col>
                {/* {error === true ? (
          <Alert variant="warning"> Todos los campos son Obligatorios </Alert>
        ) : null} */}
            </Form.Row>
        </Container>
    );
};
export default withRouter(Contacto);