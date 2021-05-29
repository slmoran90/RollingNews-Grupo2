import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';

const ListarNoticias = (props) => {
    return (
        <Container className='margenListaNoticias'>
            <h3 className='text-center my-3 py-3 bg-warning text-light'>Listado de Noticias</h3>
            <Table responsive hover>
                <thead>
                    <tr className="textoNoticia">
                        <th>Destacada</th>
                        <th>Fecha</th>
                        <th>Categoría</th>
                        <th>Titulo</th>
                        <th>Descripción Breve</th>
                        <th>Autor</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.noticias.map((valor, indice) => <ItemNoticia key={indice} info={valor} consultarAPInoticias={props.consultarAPInoticias}></ItemNoticia>)
                    }
                </tbody>
            </Table>

        </Container>
    );
};
export default ListarNoticias;
