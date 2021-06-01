import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';

const ListarNoticias = (props) => {

    // ordenar por fecha DESCENDENTE antes de mostrarlas    
    const noticiasOrdenadas = props.noticias.sort((a, b) => new Date(b.fechaNoticia).getTime() - new Date(a.fechaNoticia).getTime());

    return (
        <Container className="py-2 main-form">
            <h2 className="text-center my-3 py-3 formTitulos">Listado de Noticias</h2>

            <Table responsive hover>
                <thead>
                    <tr className="textoNoticia">
                        <th>Destacada</th>
                        <th>Fecha</th>
                        <th>Categoría</th>
                        <th>Titulo</th>
                        <th className='d-none d-md-table-cell'>Noticia Breve</th>
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