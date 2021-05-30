import React, { useState } from 'react';
import { Table, Modal } from "react-bootstrap";
import ItemCategoria from './ItemCategoria';

const ListarCategoriaModal = (props) => {
        const [show, setShow] = useState(true);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-white">
                    <Modal.Title>Categorías</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>Categorías</th> 
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            props.categorias.map((categoria) => <ItemCategoria categoria={categoria} key={categoria.id} consultarAPIcategorias={props.consultarAPIcategorias}></ItemCategoria>)
                            }
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        );
};

export default ListarCategoriaModal;