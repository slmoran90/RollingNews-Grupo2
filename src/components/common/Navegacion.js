import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Row>
          <Col md={12}>
            <Navbar.Brand href="/">
              <img
                src="/logo_news.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Rolling News
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="nav-link" exact={true}>
                  Inicio
                </NavLink>
                <NavLink className="nav-link" exact={true}>
                  Actualidad
                </NavLink>
                <NavLink className="nav-link" exact={true}>
                  Espectáculos
                </NavLink>
                <NavLink className="nav-link" exact={true}>
                  Tecnología
                </NavLink>
                <NavLink className="nav-link" exact={true}>
                  Deportes
                </NavLink>
                <NavDropdown title="Más Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Política
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Economía
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Salud</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Fotografía
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Noticias
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Categorías
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Nueva noticia
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Nueva categoría
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink className="nav-link" exact={true}>
                  Nosotros
                </NavLink>
                <NavLink className="nav-link" exact={true} to="/contacto">
                  Contacto
                </NavLink>
                <Button className="ml-5" variant="outline-success">
                  Iniciar Sesión
                </Button>
                <Button className="ml-2" variant="outline-success">
                  Registrarse
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
