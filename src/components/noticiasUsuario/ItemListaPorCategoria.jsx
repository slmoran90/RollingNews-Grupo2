import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";




const ItemListaPorCategoria = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Card className="my-3 p-2">
            <Card.Title className='m-3'>{props.noticia.tituloNoticia}</Card.Title>
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
