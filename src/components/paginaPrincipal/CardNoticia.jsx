import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cardsNoticias.css';

const CardNoticia = (props) => {
    

    return (
        <Link to={'/noticia/'+props.noticia.id}>
        <Card className='my-3' style={{ width: `${props.width}`}}>
            <Card.Img variant="top" src={props.noticia && props.noticia.imagenPrincipal} />
            <Card.Body>
                <Card.Title>{props.noticia && props.noticia.tituloNoticia}</Card.Title>
            </Card.Body>
        </Card>
        </Link>
    );
};

export default CardNoticia;
