import React,{Fragment, useState} from "react";
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
import { faDoorOpen, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navegacion = (props) => {

    const cerrarSesion = () => {
        props.setAdminUser(false);
      };

    return (
        <Fragment>
        <Navbar bg="light" expand="lg" className="fixed-top">
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
                                {/* Menu habilitado sólo al admnistrador */}
            {props.adminUser ? (                 
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <Link
                        className="nav-link"
                        exact={true}
                        to="/admin"
                      >
                        Panel
                      </Link>
                      <Link
                        className="nav-link"
                        exact={true}
                        to="/noticias/listar"
                      >
                        Noticias
                      </Link>
                      <Link
                        className="nav-link"
                        exact={true}
                        to="/categorias/listar"
                      >
                        Categorias
                      </Link>
                      <Link
                        className="nav-link"
                        exact={true}
                        to="/noticias/nueva"
                      >
                        Nueva Noticia
                      </Link>
                      <Link
                        className="nav-link"
                        exact={true}
                        to="/categorias/nueva"
                      >
                        Nueva Categoria
                      </Link>   
                      <Link className="nav-link text-danger" 
                      onClick={cerrarSesion}
                      >
                        <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon> Cerrar Sesión
                      </Link>
                    </NavDropdown>
                    
                  </Nav>
                </Navbar.Collapse>    
                                    ) : null}
                                <Link className="nav-link" exact={true} to="/nosotros">
                                    Nosotros
                                </Link>
                                <Link className="nav-link" exact={true}>
                                    Contacto
                                </Link>
                                <Link exact={true} to="/login">
                                <Button
                                    className="ml-5"
                                    variant="outline-success"
                                   
                                >
                                    Iniciar Sesión
                                </Button>
                                </Link>
                                <Link exact={true} to="/registro">
                                <Button
                                    className="ml-2"
                                    variant="outline-success"
                                >
                                    Registrarse
                                </Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
</Fragment>
    );
};

export default Navegacion;
