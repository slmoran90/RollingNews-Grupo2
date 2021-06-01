import React, { Fragment } from "react";
import { CardGroup, Button, Card, ListGroup } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
const CardSus = () => {
    return (
        <Fragment className="margenFondo">
            <CardGroup className="row">
                <Card className="col-sm-12 col-md-12 col-lg-4 mx-5">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Suscripción Gratuita!</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item>
                                    Puedes comentar tu opinión en nuestras noticias!
                </ListGroup.Item>
                                <ListGroup.Item>
                                    Tienes la posibilidad de que te lleguen las notificaciones de
                                    nuestras noticias destacadas
                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="ml-2" variant="outline-primary" type="submit" >
                            <NavLink className='nav-link' exact={true} to="/suscripcion">
                                Suscribirme!
              </NavLink>
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="col-sm-12 col-md-12 col-lg-4 mx-5">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Suscripción por 150$ por mes!</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item>
                                    Comentar todas nuestras noticias
                </ListGroup.Item>
                                <ListGroup.Item>
                                    Tienes la opción de elegir que tipo de noticias te
                                    notificaremos!
                </ListGroup.Item>
                                <ListGroup.Item>
                                    Tienes la opción que dejemos el diario impreso en la puerta de
                                    tu casa!
                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="ml-2" variant="outline-primary" type="submit" >
                            <NavLink className='nav-link' exact={true} to="/suscripcion">
                                Suscribirme!
              </NavLink>
                        </Button>
                    </Card.Footer>
                </Card>
                <Card className="col-sm-12 col-md-12 col-lg-4 mx-5">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Suscripción Premium a 500$ por mes</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item>
                                    Comentar todas nuestras noticias y editarlas*
                </ListGroup.Item>
                                <ListGroup.Item>
                                    Tienes la opción de elegir que tipo de noticias te
                                    notificaremos!
                </ListGroup.Item>
                                <ListGroup.Item>
                                    Tienes la opción que dejemos el diario impreso en la puerta de
                                    tu casa y además tienes la opción de recibir nuestra Tarjeta Premium*!
                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="ml-2" variant="outline-primary" type="submit" >
                            <NavLink className='nav-link' exact={true} to="/suscripcion">
                                Suscribirme!
              </NavLink>
                        </Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Fragment>
    );
};
export default CardSus;