import React from 'react';
import {ListGroup, Container} from 'react-bootstrap'
import ItemCategoria from './ItemCategoria';

const ListarCategoria = (props) => {
    return (
        <Container>
            <h1 className='text-center my-5'> Lista de Categorías</h1>
            <ListGroup className='my-5'>
                {
                    props.categorias.map ((categoria)=><ItemCategoria categoria={categoria} key={categoria.id} consultarAPI={props.consultarAPI}></ItemCategoria>)
                }
                
            </ListGroup>
        </Container>
    );
};

export default ListarCategoria;