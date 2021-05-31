import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";




const ItemListaPorCategoria = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Card className="my-3 p-2">
            <div className='d-flex justify-content-between m-3 '>
            <h3 className='my-auto'>{props.indice + 1} </h3>
            <Card.Title className='m-3'>{props.noticia.tituloNoticia}</Card.Title>
            </div>
            <MyVerticallyCenteredModal
            
            noticia={props.noticia} 
            show={modalShow}
            onHide={() => setModalShow(false)}/>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Preview de la Noticia
            </Button>
        </Card>
    );
};

export default ItemListaPorCategoria;
