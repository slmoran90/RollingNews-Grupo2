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
// para mostrar fecha actual
import moment from 'moment';
import 'moment/locale/es'; 

const Navegacion = (props) => {

    const cerrarSesion = () => {
        props.setAdminUser(false);
    };
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" expand='lg' className="fixed-top" expanded={expanded}>
            <Container>
                <Row>
                    <Col md={12}>
                        <Navbar.Brand href="/" className='w-100'>
                        <div className='row' >
                            <div className='col-sm-12 col-md-7'>
                            <img
                                src="/logo_news.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            Rolling News
                            </div>
                                <div className="col-sm-12 col-md-5 d-flex justify-content-center mhh-date-item">{moment().locale('es').format('LLLL')}</div>
                        </div>
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="mr-auto" collapseOnSelect>
                                <Link className="nav-link" to="/" exact onClick={() => setExpanded(!expanded)}>
                                    Inicio
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Actualidad"
                                    exact
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    Actualidad
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Espectaculos"
                                    exact
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    Espectáculos
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Tecnologia"
                                    exact
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    Tecnología
                                </Link>
                                <Link
                                    className="nav-link"
                                    to="/noticia/Deportes"
                                    exact
                                    onClick={() => setExpanded(!expanded)}
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
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Política
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Economia"
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Economía
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            className="nav-link"
                                            to="/noticia/Salud"
                                            onClick={() => setExpanded(!expanded)}
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
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Fotografía
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* Menu habilitado sólo al admnistrador */}
                                {props.adminUser ? (
                                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                                        <NavDropdown.Item><Link
                                            className="nav-link"
                                            exact={true}
                                            to="/admin"
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Panel
                                        </Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link
                                            className="nav-link"
                                            exact={true}
                                            to="/noticias/listar"
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Noticias
                                        </Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link
                                            className="nav-link"
                                            exact={true}
                                            to="/categorias/listar"
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Categorias
                                        </Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item><Link
                                            className="nav-link"
                                            exact={true}
                                            to="/noticias/nueva"
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Nueva Noticia
                                        </Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link
                                            className="nav-link"
                                            exact={true}
                                            to="/categorias/nueva"
                                            onClick={() => setExpanded(!expanded)}>
                                            Nueva Categoria
                                        </Link></NavDropdown.Item>
                                    </NavDropdown>
                                ) : null}
                                <Link className="nav-link" exact={true} to="/nosotros" onClick={() => setExpanded(!expanded)}>
                                    Nosotros
                                </Link>
                                <Link
                                    className="nav-link"
                                    exact={true}
                                    to="/contacto"
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    Contacto
                                </Link>
                                {props.adminUser ? (
                                <Link exact={true} to="/">
                                    <Button
                                        className="ml-md-5 mt-1 botonNav"
                                        onClick={() => setExpanded(!expanded)}
                                        onClick={cerrarSesion}
                                    >
                                        Cerrar Sesion
                                    </Button>
                                </Link> 
                                ): (
                                    <Link exact={true} to="/login">
                                    <Button
                                        className="ml-md-5 mt-1 botonNav"
                                        onClick={() => setExpanded(!expanded)}
                                    >
                                        Iniciar Sesion
                                    </Button>
                                </Link> 
                                ) }
                                <Link type="button" exact={true} to="/promoSus">
                                    <Button className="ml-md-2 mt-1 botonNav" onClick={() => setExpanded(!expanded)}>Suscribirse</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
                
            </Container>
        </Navbar>

    );
};

export default Navegacion;
