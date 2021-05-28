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
import { Link } from "react-router-dom";

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
                                <Link className="nav-link" to="/" exact>
                                    {" "}
                                    Inicio{" "}
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Actualidad"
                                    exact
                                >
                                    {" "}
                                    Actualidad{" "}
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Espectaculos"
                                    exact
                                >
                                    {" "}
                                    Espectáculos{" "}
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Tecnologia"
                                    exact
                                >
                                    {" "}
                                    Tecnología{" "}
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Deportes"
                                    exact
                                >
                                    {" "}
                                    Deportes{" "}
                                </Link>
                                <NavDropdown
                                    title="Más Categorías"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="">
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Politica"
                                        >
                                            Política
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="">
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Economia"
                                        >
                                            Economía
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="">
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Salud"
                                        >
                                            Salud
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="">
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Fotografia"
                                        >
                                            Fotografía
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Admin"
                                    id="basic-nav-dropdown"
                                >
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
                                <Nav.Link className="nav-link" exact={true}>
                                    Nosotros
                                </Nav.Link>
                                <Nav.Link className="nav-link" exact={true}>
                                    Contacto
                                </Nav.Link>
                                <Button
                                    className="ml-5"
                                    variant="outline-success"
                                >
                                    Iniciar Sesión
                                </Button>
                                <Button
                                    className="ml-2"
                                    variant="outline-success"
                                >
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
