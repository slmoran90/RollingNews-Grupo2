import React from 'react';
import {Container,Table,Row,Col } from 'react-bootstrap'
import ItemCategoria from './ItemCategoria';

const ListarCategoria = (props) => {
    return (
        <Container className="py-2 main-form">
            <h2 className="text-center my-3 py-3 formTitulos">Categorías</h2>
            <Row>
                <Col></Col>
                <Col xs={12} md={6}>
                    <Table responsive striped hover size='sm' >
                    <thead>
                        <tr className='text-center'>
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
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default ListarCategoria;