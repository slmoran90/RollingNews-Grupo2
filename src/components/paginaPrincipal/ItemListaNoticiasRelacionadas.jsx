import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cardConHover.css';

const ItemListaNoticiasRelacionadas = (props) => {
    return (
        <div className="m-2">
            {props.noticia && (
                <Card
                    className="cardHover"
                    style={{ width: `18rem` }}
                >
                    <Card.Img
                        variant="top"
                        src={`${props.noticia.imagenPrincipal}`}
                        alt="Card image"
                        style={{ width: `17rem`, height: "10rem" }}
                    />
                    <Card.Body className='p-1 textHover'>
                        <Card.Text className=''>{props.noticia.tituloNoticia}</Card.Text>
                        <Card.Text>
                            <Link>
                                <p>Ver más...</p>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default ItemListaNoticiasRelacionadas;
