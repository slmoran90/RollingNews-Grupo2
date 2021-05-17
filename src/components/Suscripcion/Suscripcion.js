import { React } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

const Suscripcion = () => {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Nombre Completo"
          ></Form.Control>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Dirección</Form.Label>
            <Form.Control placeholder="Escriba su domicilo"></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Localidad</Form.Label>
            <Form.Control placeholder="Localidad"></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese su Código Postal"
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Teléfono de Contacto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese un número de contacto"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
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
