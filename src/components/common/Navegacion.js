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
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Noticias
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/categorias/nueva'>
                    Categorías
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.2" className='nav-link' exact={true} to='/categorias/nueva'> */}

                  <NavDropdown.Item href="#action/3.3">
                    Nueva noticia
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Nueva categoría
                  </NavDropdown.Item>
                </NavDropdown>

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
