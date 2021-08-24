import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import './listaNoticiasPorCategoria.css'

const ItemListaPorCategoria = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        
            <li className="my-3 p-2">
                <div className="d-flex justify-content-between m-3 ">
                    <Card.Title className="m-3">
                        {props.noticia.tituloNoticia}
                    </Card.Title>
                </div>
                <MyVerticallyCenteredModal
                    noticia={props.noticia}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div className='d-flex justify-content-end'>
                <button className='botonGuardar' onClick={() => setModalShow(true)}>
                    Preview de la Noticia
                </button>
                </div>
            </li>
        
    );
};

export default ItemListaPorCategoria;
