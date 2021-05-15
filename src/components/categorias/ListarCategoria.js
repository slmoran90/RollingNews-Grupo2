import React from 'react';
import {ListGroup, Container} from 'react-bootstrap'
import ItemCategoria from './ItemCategoria';

const ListarCategoria = (props) => {
    return (
        <Container className='shadow-lg w-75 mt-4 px-5 pb-3'>
            <h1 className='text-center my-3 py-5'> Lista de Categorías</h1>
            <ListGroup className='my-3'>
                {
                    props.categorias.map ((categoria)=><ItemCategoria categoria={categoria} key={categoria.id} consultarAPIcategorias={props.consultarAPIcategorias}></ItemCategoria>)
                }
                
            </ListGroup>
        </Container>
    );
};

export default ListarCategoria;