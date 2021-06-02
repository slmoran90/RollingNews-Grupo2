import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import { campoReq, validarEmail, validarNumeros } from "../common/validaciones"
import emailjs from "emailjs-com";
import { withRouter } from "react-router-dom";
const Suscripcion = () => {
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [direccion, setDireccion] = useState("");
    const [numeros, setNumeros] = useState("")
    const [codArea, setCodArea] = useState("")
    const [error, setError] = useState(false);
    const enviarMail = async (e) => {
        emailjs.sendForm(
            "service_9vethkv",
            "template_e72jk41",
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
            campoReq(localidad) &&
            campoReq(direccion) &&
            validarNumeros(codArea) &&
            validarNumeros(numeros)
        ) {
            enviarMail(e);
            setError(true);
            e.target.reset();
        } else {
            setError(false);
        }
    };
    return (
        <Container className="margenFondo">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su Nombre Completo"
                        required
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        name="nombreCompleto"
                    ></Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escriba su domicilo"
                            required
                            onChange={(e) => setDireccion(e.target.value)}
                            name="direccion"
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Localidad</Form.Label>
                        <Form.Control placeholder="Localidad" required onChange={(e) => setLocalidad(e.target.value)} name="localidad"
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Código Postal</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese su Código Postal"
                            required
                            onChange={(e) => setCodArea(e.target.value)}
                            name="codArea"
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Teléfono de Contacto</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese un número de contacto"
                            required
                            onChange={(e) => setNumeros(e.target.value)}
                            name="numeros"
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required
                        onChange={(e) => setEmail(e.target.value)}
                        name="email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Suscribirme!
        </Button>
            </Form>
        </Container>
    );
};
export default withRouter(Suscripcion);