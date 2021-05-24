import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

const Suscripcion = () => {
  const [texto, setTexto] = useState("");
  const [email, setEmail] = useState("");
  const [codArea, setCodArea] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      texto.trim() === /^[a-zA-ZÀ-ÿ\s]{3,40}$/ &&
      email.trim() === /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ &&
     codArea ===  /^\d{3,14}$/
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    e.target.reset();
  };
  const formulario = {
    texto,
    email,
    codArea,
  };
  console.log(formulario);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Nombre Completo"
            required
            onChange={(e) => setTexto(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              placeholder="Escriba su domicilo"
              required
              onChange={(e) => setTexto(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Localidad</Form.Label>
            <Form.Control placeholder="Localidad" required onChange={(e) => setTexto(e.target.value)}></Form.Control>
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
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Teléfono de Contacto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese un número de contacto"
              required
              onChange={(e) => setCodArea(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required 
          onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        {/* <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
        <Button variant="primary" type="submit">
          Suscribirme!
        </Button>
      </Form>
    </Container>
  );
};

export default Suscripcion;
