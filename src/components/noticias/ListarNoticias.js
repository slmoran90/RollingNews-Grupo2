import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';

const ListarNoticias = (props) => {

    // ordenar por fecha DESCENDENTE antes de mostrarlas
    //console.log("ARRAY ORDENADO: ",props.noticias.sort((a, b) => new Date(a.fechaNoticia).getTime() - new Date(b.fechaNoticia).getTime()));
    const noticiasOrdenadas = props.noticias.sort((a, b) => new Date(a.fechaNoticia).getTime() - new Date(b.fechaNoticia).getTime());
    
    return (
        <Container className='margenListaNoticias'>
            <h3 className='text-center my-3 py-3 bg-warning text-light'>Listado de Noticias</h3>
            <Table responsive hover >
                <thead>
                    <tr className="textoNoticia">
                        <th>Destacada</th>
                        <th>Fecha</th>
                        <th className = "d-none d-md-block">Categoría</th>
                        <th>Titulo</th>
                        <th>Descripción Breve</th>
                        <th className = "d-none d-md-block">Autor</th>
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
    );
};
export default ListarNoticias;
