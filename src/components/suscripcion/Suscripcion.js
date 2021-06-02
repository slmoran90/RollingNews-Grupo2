import React, { useState } from "react";
import { Form, Col, Container, Alert } from "react-bootstrap";
import { validarEmail, validarNumeros } from "../common/validaciones"
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
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

    const campoReq = (nombreCompleto) => {
        if (nombreCompleto.trim() !== '' && nombreCompleto.length > 6 && isNaN) {
            setError(false)
            return;
        } else {
            setError(true)
        }
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
            setError(false);
            e.target.reset();
            Swal.fire(
                'Estas Suscripto a nuestros servicios!',
                'Nuestros administradores te mandarán un mail de bienvenida!',
                'success'
              );
        } else {
            setError(true);
            Swal.fire(
                'Ocurrio un error',
                'Inténtelo en unos minutos',
                'error'
              );
              
        }
    };

    return (
        <Container className="margenFondo">
            <h3 className="text-center formTitulos">Suscripción</h3>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                
                    <Form.Label>Nombre y Apellido*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su Nombre Completo"
                        required
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        name="nombreCompleto"
                        className="outlineColor"
                    ></Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Dirección*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escriba su domicilo"
                            required
                            onChange={(e) => setDireccion(e.target.value)}
                            name="direccion"
                            className="outlineColor"
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Localidad*</Form.Label>
                        <Form.Control placeholder="Localidad" required onChange={(e) => setLocalidad(e.target.value)} name="localidad"
                        className="outlineColor"
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Código Postal*</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese su Código Postal"
                            required
                            onChange={(e) => setCodArea(e.target.value)}
                            name="codArea"
                            className="outlineColor"
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Teléfono de Contacto*</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese un número de contacto"
                            required
                            onChange={(e) => setNumeros(e.target.value)}
                            name="numeros"
                            className="outlineColor"
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required
                        onChange={(e) => setEmail(e.target.value)}
                        name="email" 
                        className="outlineColor"/>
                </Form.Group>
                <div className="text-center">
                <button className="botonGuardar" type="submit">
                    Suscribirme!
        </button>
                </div>
                {error ? (
                        <Alert variant="warning"> Todos los campos son Obligatorios </Alert>
                    ) : null}
            </Form>
        </Container>
    );
};

export default withRouter(Suscripcion);