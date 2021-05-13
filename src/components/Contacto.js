/*import React, { Fragment } from "react";

const Contacto = () => {
  return (
    <Fragment>
      <h1 className="text-danger">Pagina de contacto</h1>
    </Fragment>
  );
};

export default Contacto;*/

import React, { useState } from "react";
import { Container, Form, Button, Col, Alert } from "react-bootstrap";

const Contacto = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar los datos
    if (nombreCompleto.trim() === "") {
      //si falla, mostrar el alert de error
      setError(true);
      return;
    } else {
      //si funciona, envio los datos a la api
      setError(false);
    }
  };

  const formulario = {
    nombreCompleto,
  };

  console.log(formulario);

  return (
    <Container>
      <Form.Row onSubmit={handleSubmit}>
        <Col className="mx-3">
          <Form>
            <h2 className="text-center">¿En qué te podemos ayudar?</h2>
            <hr />
            <Form.Group>
              <Form.Label>¿que tipo de consulta es?</Form.Label>
              <Form.Control as="select">
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Email * </Form.Label>
              <Form.Control type="email" placeholder="Juanperez@hotmail.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Escriba su consulta *</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-50 my-4">
              Enviar
            </Button>
          </Form>
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
        {error === true ? (
          <Alert variant="warning"> Todos los campos son Obligatorios </Alert>
        ) : null}
      </Form.Row>
    </Container>
  );
};

export default Contacto;
