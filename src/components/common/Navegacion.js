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
                
                <Nav.Link className="nav-link" exact={true}>
                  {" "}
                  Inicio{" "}
                </Nav.Link>

                <Nav.Link className="nav-link" exact={true}>
                  {" "}
                  Actualidad{" "}
                </Nav.Link>
                <Nav.Link className="nav-link" exact={true}>
                  {" "}
                  Espectáculos{" "}
                </Nav.Link>
                <Nav.Link className="nav-link" exact={true}>
                  {" "}
                  Tecnología{" "}
                </Nav.Link>
                <Nav.Link className="nav-link" exact={true}>
                  {" "}
                  Deportes{" "}
                </Nav.Link>
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

                {/* Menu habilitado sólo al admnistrador */}
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                      <NavLink
                        className="nav-link"
                        exact={true}
                        to="/noticias/listar"
                      >
                        Listar Noticias
                      </NavLink>
                      <NavLink
                        className="nav-link"
                        exact={true}
                        to="/categorias/listar"
                      >
                        Listar Categorias
                      </NavLink>
                      <NavLink
                        className="nav-link"
                        exact={true}
                        to="/noticias/nueva"
                      >
                        Nueva Noticia
                      </NavLink>
                      <NavLink
                        className="nav-link"
                        exact={true}
                        to="/categorias/nueva"
                      >
                        Nueva Categoria
                      </NavLink>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>

                {/* <NavDropdown.Item href="#">Noticias</NavDropdown.Item>
                  <NavDropdown.Item href="/categorias/listar">Categoria</NavDropdown.Item>
                  <NavDropdown.Item href="#">Nueva noticia</NavDropdown.Item>
                  <NavDropdown.Item href="/categorias/nuevo">Nueva categoría</NavDropdown.Item> */}

                {/* =========================================== */}

                <Nav.Link className="nav-link" exact={true}>
                  Nosotros
                </Nav.Link>
                <Nav.Link className="nav-link" exact={true}>
                  Contacto
                </Nav.Link>
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
