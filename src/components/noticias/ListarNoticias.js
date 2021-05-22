
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';
import Swal from 'sweetalert2';

const ListarNoticias = (props) => {
    console.log('PROPS array de noticias: ', props.children[1])
    console.log('PROPS consultarAPInoticias: ', props.children[3])
    
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
                        <th>Acciones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.children[1].map((valor, indice) => <ItemNoticia key={indice} info={valor} consultarAPInoticias={props.consultarAPInoticias}></ItemNoticia>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ListarNoticias;

// <div>
//             {props.categoria[0] && (
//                 <Container>
//                     <h3>{props.categoria[0].categoria}</h3>
//                     <div className='d-flex justify-content-around'>
//                         {props.categoria.map((categoria) => (
//                             <CardNoticia noticia={categoria} width={"18rem"} key={categoria.id}/>
//                         ))}
//                     </div>
//                 </Container>
//             )}
//         </div>