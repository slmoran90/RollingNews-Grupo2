import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardNoticiaPrincipal = (props) => {
    return (
        <Card className='my-3 align-self-center' style={{ width: `${props.width}`}}>
            <Card.Img variant="top" src={props.noticia && props.noticia.imagenPrincipal} />
            <Card.Body className='bg-info'>
                <Card.Title>{props.noticia && props.noticia.tituloNoticia}</Card.Title>
                <Card.Text className='clamp-line-3'>
                    {props.noticia && props.noticia.noticiaBreve}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardNoticiaPrincipal;