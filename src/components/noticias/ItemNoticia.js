import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ItemNoticia = (props) => {
    // console.log(props.info)
    return (
    <Container>
            {/* continuacion sistema de grillas */}
            <div className="col my-3">
                <Card className='shadow-lg'>
                    <Card.Img variant="top" src={props.info.imagenPrincipal} alt={props.info.tituloNoticia} />
                    <Card.Body>
                        <Card.Title>{props.info.tituloNoticia}</Card.Title>
                        <Card.Text>{props.info.noticiaBreve}</Card.Text>
                        <div className="d-flex justify-content-center">
                            {/* <Button variant="primary" className='text-light mr-3'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Ver Noticia Completa</Button> */}
                            <Link className='btn btn-primary text-light mr-3' to={'/noticias/noticiaCompleta/'+props.info.id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Ver Noticia Completa</Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
    </Container>
    );
};

export default ItemNoticia;
