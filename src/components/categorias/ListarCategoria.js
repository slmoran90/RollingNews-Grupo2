import { Container, Table, Row, Col } from 'react-bootstrap'
import React, { useEffect } from 'react';
import ItemCategoria from './ItemCategoria';
import { withRouter, useHistory } from "react-router-dom";
const ListarCategoria = (props) => {
    let history = useHistory();
    useEffect(() => {
        if (props.adminUser !== true) {
            history.push("/");
        }
    });
    return (
        <Container className="py-2 margenFondo">
            <h2 className="text-center my-3 py-3 formTitulos">Categorías</h2>
            <Row className='d-flex justify-content-center'>
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
                                props.categorias.map((categoria) => <ItemCategoria categoria={categoria} key={categoria._id} consultarAPIcategorias={props.consultarAPIcategorias}></ItemCategoria>)
                                //props.categorias.map((categoria) => <ItemCategoria categoria={categoria} consultarAPIcategorias={props.consultarAPIcategorias}></ItemCategoria>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(ListarCategoria);
