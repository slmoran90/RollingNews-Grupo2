
import React, {useEffect,useState} from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';
import Swal from 'sweetalert2';

const ListarNoticias = (props) => {
    console.log('PROPS en listar noticias: ', props)
    // URL donde estan almacenadas las noticias
    // const URLnoticias = process.env.REACT_APP_API_URLnoticias;

     // state para almacenar resultados del fetch
    // const [noticias, setNoticias] = useState([]);

    // useEffect(async () => {
    //     consultarAPInoticias();
    // }, [])

    // const consultarAPInoticias = async () => {
    // // buscar las noticias que tengan las categoria pasada como parametro en la URL
    //     try {
    //         const respuesta = await fetch(URLnoticias);
    //         if (respuesta.status === 200) {
    //             const noticiasFiltradas = await respuesta.json();
    //             setNoticias(noticiasFiltradas);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         Swal.fire(
    //             'Ocurrió un Error!',
    //             'Inténtelo en unos minutos.',
    //             'error'
    //         )
    //     }
    // }

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
                    {
                        props.children[1].map((valor, indice) => <ItemNoticia key={indice} info={valor}></ItemNoticia>)
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