
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';
import Swal from 'sweetalert2';

const ListarNoticias = (props) => {
    console.log('PROPS en ListarNoticias: ', props)
    // console.log('PROPS children[1] array noticias: ', props.children[1])
    // console.log('PROPS children[0]: ', props.children[0])
    // console.log('PROPS children[1] array noticias: ', props.children[1])
    // console.log('PROPS children[2] nombre funcion: ', props.children[2])
    // console.log('PROPS children[3] consultarAPInoticias: ', props.children[3])

    
    return (
        <Container className='container my-3 py-3 shadow-lg'>
            <h3 className='text-center my-3 py-3 bg-warning text-light'>Listado de Noticias</h3>
            <Table responsive>
                <thead>
                    <tr className="textoNoticia">
                        <th>Fecha</th>
                        <th>Autor</th>
                        <th>Titulo</th>
                        <th>Descripción Breve</th>
                        <th>Acciones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {/* props.children[1] contiene el array de noticias */}
                {/* props.children[3] contiene la funcion consultarAPInoticias */}
                    {
                        props.children[1].map((valor, indice) => <ItemNoticia key={indice} info={valor} consultarAPInoticias={props.children[3]}></ItemNoticia>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ListarNoticias;
