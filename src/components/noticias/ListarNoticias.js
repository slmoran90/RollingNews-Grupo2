import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';

const ListarNoticias = (props) => {

    // ordenar por fecha DESCENDENTE antes de mostrarlas
    //console.log("ARRAY ORDENADO: ",props.noticias.sort((a, b) => new Date(a.fechaNoticia).getTime() - new Date(b.fechaNoticia).getTime()));
    const noticiasOrdenadas = props.noticias.sort((a, b) => new Date(a.fechaNoticia).getTime() - new Date(b.fechaNoticia).getTime());
    
    return (
        // <div className="main-form">
        // <Container className="py-3">
        //     <h2 className="text-center my-3 py-3">Listado de Noticias</h2>
        <Container className='margenListaNoticias'>
            <h3 className='text-center my-3 py-3 fondoTitulo text-light'>Listado de Noticias</h3> 
            <Table responsive hover>
                <thead>
                    <tr className="textoNoticia">
                        <th>Destacada</th>
                        <th>Fecha</th>
                        <th>Categoría</th>
                        <th>Titulo</th>
                        <th className='d-none d-md-table-cell'>Descripción Breve</th>
                        <th>Autor</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        noticiasOrdenadas.map((valor, indice) => <ItemNoticia key={indice} info={valor} consultarAPInoticias={props.consultarAPInoticias}></ItemNoticia>)
                    }
                </tbody>
            </Table>

        </Container>
        // </div>
    );
};
export default ListarNoticias;
