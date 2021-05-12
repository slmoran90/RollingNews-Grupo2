import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardNoticiaPrincipal = (props) => {
    return (
        <Card className='my-3' style={{ width: `${props.width}`, height:`${props.width}`}}>
            <Card.Img variant="top" src={props.noticia && props.noticia.imagenPrincipal} />
            <Card.Body className='bg-info'>
                <Card.Title>{props.noticia && props.noticia.tituloNoticia}</Card.Title>
                <Card.Text className='text-truncate'>
                    {props.noticia && props.noticia.noticiaBreve}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardNoticiaPrincipal;