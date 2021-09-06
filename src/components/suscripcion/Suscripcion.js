import React, { useState } from "react";
import { Form, Col, Container, Alert } from "react-bootstrap";
import {
    validarEmail,
    validarNumeros,
    campoReq,
    validarCodPostal,
    validarContraseña,
} from "../common/validaciones";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const Suscripcion = () => {
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [direccion, setDireccion] = useState("");
    const [numeros, setNumeros] = useState("");
    const [codArea, setCodArea] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [error, setError] = useState(false);

    const enviarMail = async (e) => {
        emailjs
            .sendForm(
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

    const compararContraseña = () => {
        if (contraseña === confirmar) {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            campoReq(nombreCompleto.trim()) &&
            validarEmail(email) &&
            campoReq(localidad) &&
            campoReq(direccion) &&
            validarCodPostal(codArea) &&
            validarNumeros(numeros) &&
            validarContraseña(contraseña) &&
            validarContraseña(confirmar) &&
            compararContraseña
        ) {
            try {
                const datosSuscrip = {
                    nombreCompleto,
                    email,
                    localidad,
                    direccion,
                    codArea,
                    numeros,
                    contraseña
                };
                const configuracion = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(datosSuscrip),
                };
                const respuesta = await fetch(
                    "http://localhost:4000/api/suscripcion",
                    configuracion
                );
                console.log(respuesta);
                if (respuesta.status === 201) {
                    console.log("salío todo ok");
                    enviarMail(e);
                    setError(false);
                    e.target.reset();
                    Swal.fire(
                        "Estas Suscripto a nuestros servicios!",
                        "Nuestros administradores te mandarán un mail de bienvenida!",
                        "success"
                    );
                } else if (respuesta.status === 500) {
                    console.log("No está cumpliendo los requerimientos");
                    setError(true);
                    Swal.fire("Ocurrio un error", "Inténtelo en unos minutos", "error");
                } else {
                    console.log("no entró al if, puede estar mal tipeado");
                }
            } catch (error) {
                console.log(error);
            }
            e.target.reset();
        }
    };

    // enviarMail(e);
    //     setError(false);
    //     e.target.reset();
    //     Swal.fire(
    //       "Estas Suscripto a nuestros servicios!",
    //       "Nuestros administradores te mandarán un mail de bienvenida!",
    //       "success"
    //     );
    //   } else {
    //     setError(true);
    //     Swal.fire("Ocurrio un error", "Inténtelo en unos minutos", "error");

    return (
        <Container className="margenFondo">
            <h3 className="text-center formTitulos">Suscripción</h3>
            <hr />
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
                        maxLength={40}
                        minLength={6}
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
                            maxLength={50}
                            minLength={10}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Localidad*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Localidad"
                            required
                            onChange={(e) => setLocalidad(e.target.value)}
                            name="localidad"
                            className="outlineColor"
                            maxLength={50}
                            minLength={10}
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
                            maxLength={4}
                            minLength={3}
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
                            maxLength={10}
                            minLength={10}
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="outlineColor"
                        maxLength={40}
                        minLength={10}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña*</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        required
                        onChange={(e) => setContraseña(e.target.value)}
                        name="contraseña"
                        className="outlineColor"
                        maxLength={12}
                        minLength={8}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirmar Contraseña*</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirme su contraseña"
                        required
                        onChange={(e) => setConfirmar(e.target.value)}
                        name="contraseña"
                        className="outlineColor"
                        maxLength={12}
                        minLength={8}
                    />
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