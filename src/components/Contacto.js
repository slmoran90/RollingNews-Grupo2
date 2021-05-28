import React, { useState } from "react";
import { Container, Form, Button, Col, Alert } from "react-bootstrap";
import { emailjs } from "emailjs-com";

const Contacto = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [error, setError] = useState(false);
  const [tipoConsulta, setTipoConsulta] = useState("");

  

  const enviarMail = () => {
    emailjs
      .sendForm(
        "gmail",
        "template_p8vmf2q",
        {
          nombreCompleto,
          email,
          textArea,
          tipoConsulta,
        },
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
          nombreCompleto.trim() === "" &&
          email.trim() === /\w+@\w+\.[a-z]{2,}$/ &&
          textArea === "" 
          // && tipoConsulta.trim() === ""
          ) {
      console.log("estoy dentro de enviarmail")
      enviarMail();
      setError(true);
      return;
    } else {
      setError(false);
    }
    e.target.reset();
  };

  const formulario = {
    nombreCompleto,
    email,
    textArea,
    tipoConsulta,
  };

  console.log(formulario);
  return (
    <Container>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Email * </Form.Label>
              <Form.Control
                type="email"
                placeholder="Juanperez@hotmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Escriba su consulta *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={(e) => setTextArea(e.target.value)}
                required
              />
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
