import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.noticia.categoria}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="m-3">{props.noticia.tituloNoticia}</h4>
                <hr></hr>
                <div className="my-3">
                    <img
                        src={props.noticia.imagenPrincipal}
                        alt="imágen de la noticia"
                        className="w-100"
                    />
                </div>
                <hr></hr>
                <p className="m-3">{props.noticia.noticiaBreve}</p>
            </Modal.Body>
            <Modal.Footer>
                <Link
                    className="btn buttonModal"
                    to={
                        "/noticia/" +
                        props.noticia.categoria +
                        "/" +
                        props.noticia._id
                    }
                >
                    Ir a la noticia
                </Link>
                <Button className="btn btn-secondary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;
