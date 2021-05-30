import React from 'react';
import { ListGroup, Container } from 'react-bootstrap'
import ItemCategoria from './ItemCategoria';

const ListarCategoria = (props) => {
    // console.log('props en listar categoria: ',props)
    return (
        <div className="main-form">
            <Container className="py-3">
                <h2 className="text-center my-3 py-3">Categorías</h2>
                <ListGroup className='my-3 w-50'>
                    {
                        props.categorias.map((categoria) => <ItemCategoria categoria={categoria} key={categoria.id} consultarAPIcategorias={props.consultarAPIcategorias}></ItemCategoria>)
                    }
                </ListGroup>
            </Container>
        </div>
    );
};

export default ListarCategoria;