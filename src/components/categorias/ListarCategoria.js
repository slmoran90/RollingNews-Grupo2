import React, {useEffect} from 'react';
import {ListGroup, Container} from 'react-bootstrap'
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
        <Container className='shadow-lg w-75 my-3 py-3 px-5 pb-3'>
            <h3 className="text-center my-3 py-3 bg-warning text-light">
                Lista de Categorías
            </h3>
            <ListGroup className='my-3'>
                {
                    props.categorias.map ((categoria)=><ItemCategoria categoria={categoria} key={categoria.id} consultarAPIcategorias={props.consultarAPIcategorias}></ItemCategoria>)
                }
            </ListGroup>
        </Container>
    );
};

export default withRouter(ListarCategoria);