
import {Container,Table,Row,Col } from 'react-bootstrap'
import React, {useEffect} from 'react'; 
import ItemCategoria from './ItemCategoria';
import { withRouter, useHistory} from "react-router-dom";
const ListarCategoria = (props) => {
    // console.log('props en listar categoria: ',props)+
    let history = useHistory();
    useEffect(() => {
        if(props.adminUser !== true){
          history.push("/");
        }
      });
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

export default withRouter(ListarCategoria);