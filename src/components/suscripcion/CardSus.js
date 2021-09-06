import React, { Fragment } from "react";
import { CardGroup, Card, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const CardSus = () => {
    return (
        <Fragment>
            <CardGroup className="d-flex flex-wrap mt-5">
                <Card className="justify-content-around">
                    <div className="text-center">
                        <Card.Img variant="top" src="/bronce.jpg" className="w-25 " />
                    </div>
                    <Card.Body>
                        <Card.Title className="formTitulos">
                            Suscripción Gratuita!
                        </Card.Title>
                        <Card.Text>
                            <hr />
                            <h4>Beneficios:</h4>
                            <hr />
                            <ListGroup>
                                <ListGroup.Item className="outlineColor">
                                    Puedes comentar tu opinión en nuestras noticias!
                                </ListGroup.Item>
                                <ListGroup.Item className="outlineColor">
                                    Tienes la posibilidad de que te lleguen las notificaciones de
                                    nuestras noticias destacadas
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="ml-2 botonNav" type="submit">
                            <NavLink
                                className="nav-link text-dark"
                                exact={true}
                                to="/suscripcion"
                            >
                                Suscribirme!
                            </NavLink>
                        </button>
                    </Card.Footer>
                </Card>
                <Card className="justify-content-around">
                    <div className="text-center">
                        <Card.Img variant="top" src="/plata.jpg" className="w-25 " />
                    </div>
                    <Card.Body>
                        <Card.Title className="formTitulos">
                            Suscripción por 150$ por mes!
                        </Card.Title>
                        <Card.Text>
                            <hr />
                            <h4>Beneficios:</h4>
                            <hr />
                            <ListGroup>
                                <ListGroup.Item className="outlineColor tamaño">
                                    Comentar todas nuestras noticias
                                </ListGroup.Item>
                                <ListGroup.Item className="outlineColor">
                                    Tienes la opción de elegir que tipo de noticias te
                                    notificaremos!
                                </ListGroup.Item>
                                <ListGroup.Item className="outlineColor">
                                    Tienes la opción que dejemos el diario impreso en la puerta de
                                    tu casa!
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="ml-2 botonNav" type="submit">
                            <NavLink
                                className="nav-link text-dark"
                                exact={true}
                                to="/suscripcion"
                            >
                                Suscribirme!
                            </NavLink>
                        </button>
                    </Card.Footer>
                </Card>
                <Card className="justify-content-around">
                    <div className="text-center">
                        <Card.Img variant="top" src="/oro.png" className="w-25 " />
                    </div>
                    <Card.Body>
                        <Card.Title className="formTitulos">
                            Suscripción Premium a 500$ por mes
                        </Card.Title>
                        <Card.Text>
                            <hr />
                            <h4>Beneficios:</h4>
                            <hr />
                            <ListGroup>
                                <ListGroup.Item className="outlineColor">
                                    Comentar todas nuestras noticias y editarlas*
                                </ListGroup.Item>
                                <ListGroup.Item className="outlineColor">
                                    Tienes la opción de elegir que tipo de noticias te
                                    notificaremos!
                                </ListGroup.Item>
                                <ListGroup.Item className="outlineColor">
                                    Tienes la opción que dejemos el diario impreso en la puerta de
                                    tu casa y además tienes la opción de recibir nuestra Tarjeta
                                    Premium*!
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="ml-2 botonNav" type="submit">
                            <NavLink
                                className="nav-link text-dark"
                                exact={true}
                                to="/suscripcion"
                            >
                                Suscribirme!
                            </NavLink>
                        </button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Fragment>
    );
};
export default CardSus;