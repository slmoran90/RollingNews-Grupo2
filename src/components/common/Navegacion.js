import React, { useState } from "react";
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
// import ListarCategoriaModal from "./components/categorias/ListarCategoriaModal";

const Navegacion = () => {
    const [expanded,setExpanded] = useState(false);
    return (
        <Navbar bg="light" expand="lg" className="fixed-top" expanded={expanded}>
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
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=> setExpanded(!expanded)} />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="mr-auto" collapseOnSelect>
                                <Link className="nav-link" to="/" exact onClick={()=> setExpanded(!expanded)}>
                                    Inicio
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Actualidad"
                                    exact
                                    onClick={()=> setExpanded(!expanded)}
                                >
                                    Actualidad
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Espectaculos"
                                    exact
                                    onClick={()=> setExpanded(!expanded)}
                                >
                                    Espectáculos
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Tecnologia"
                                    exact
                                    onClick={()=> setExpanded(!expanded)}
                                >
                                    Tecnología
                                </Link>
                                <Link 
                                    className="nav-link"
                                    to="/noticia/Deportes"
                                    exact
                                    onClick={()=> setExpanded(!expanded)}
                                >
                                    Deportes
                                </Link>
                                <NavDropdown
                                    title="Más Categorías"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item>
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Politica"
                                            onClick={()=> setExpanded(!expanded)}
                                        >
                                            Política
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Economia"
                                            onClick={()=> setExpanded(!expanded)}
                                        >
                                            Economía
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Salud"
                                            onClick={()=> setExpanded(!expanded)}
                                        >
                                            Salud
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link
                                            className="nav-link"
                                            exact={true}
                                            to="/categorias/fotografias"
                                            onClick={()=> setExpanded(!expanded)}
                                        >
                                            Fotografía
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* Menu habilitado sólo al admnistrador */}
                                        <NavDropdown title="Admin" id="basic-nav-dropdown">
                                            <NavDropdown.Item><Link
                                                className="nav-link"
                                                exact={true}
                                                to="/noticias/listar"
                                                onClick={()=> setExpanded(!expanded)}
                                            >
                                                Noticias
                                            </Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link
                                                className="nav-link"
                                                exact={true}
                                                to="/categorias/listar"
                                                onClick={()=> setExpanded(!expanded)}
                                                // onClick={handleShow}
                                            >
                                                Categorias
                                            </Link></NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item><Link
                                                className="nav-link"
                                                exact={true}
                                                to="/noticias/nueva"
                                                onClick={()=> setExpanded(!expanded)}
                                            >
                                                Nueva Noticia
                                            </Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link
                                                className="nav-link"
                                                exact={true}
                                                to="/categorias/nueva"
                                                onClick={()=> setExpanded(!expanded)}
                                            >
                                                Nueva Categoria
                                            </Link></NavDropdown.Item>
                                        </NavDropdown>
                                <Link className="nav-link" exact={true} to="/nosotros" onClick={()=> setExpanded(!expanded)}>
                                    Nosotros
                                </Link>
                                <Link className="nav-link" exact={true}  onClick={()=> setExpanded(!expanded)}>
                                    Contacto
                                </Link>
                                <Button
                                    className="ml-md-5 mt-1"
                                    variant="outline-warning"
                                    onClick={()=> setExpanded(!expanded)}
                                >
                                    Iniciar Sesión
                                </Button>
                                <Button
                                    className="ml-md-2 mt-1"
                                    variant="outline-warning"
                                    onClick={()=> setExpanded(!expanded)}
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
