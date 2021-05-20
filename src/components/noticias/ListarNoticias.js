
import React  from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';

const ListarNoticias = (props) => {
    // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias;

    return (
        <Container className='container my-3 py-3 shadow-lg'>
            <h3 className='text-center my-3 py-3 bg-warning text-light'>Listado de Noticias</h3>
            <Table>
                <thead>
                    <tr className="textoNoticia">
                        <th>Fecha</th>
                        <th>Autor</th>
                        <th>Titulo</th>
                        <th>Descripción Breve</th>
                        <th>Ver Noticia</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        props.noticias.map((valor, indice) => <ItemNoticia key={indice} info={valor} consultarAPInoticias={props.consultarAPInoticias}></ItemNoticia>)
                    } */}
                </tbody>    
            </Table>    
        </Container>
    );
};

export default ListarNoticias;