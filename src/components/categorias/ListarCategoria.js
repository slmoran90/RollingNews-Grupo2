import React from 'react';
import { ListGroup, Container } from 'react-bootstrap'
import ItemCategoria from './ItemCategoria';

const ListarCategoria = (props) => {
    // console.log('props en listar categoria: ',props)
    return (
            <Container className="py-3 w-50 margenListaNoticias">
                <h3 className="text-center my-3 py-3 fondoTitulo text-light">Categorías</h3>
                <ListGroup>
                    {
                        props.categorias.map((categoria) => <ItemCategoria categoria={categoria} key={categoria.id} consultarAPIcategorias={props.consultarAPIcategorias}></ItemCategoria>)
                    }
                </ListGroup>
            </Container>
    );
};

export default ListarCategoria;