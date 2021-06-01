import React, {useEffect} from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';
import Swal from 'sweetalert2';
import { withRouter, useHistory} from "react-router-dom";
const ListarNoticias = (props) => {
    let history = useHistory();
    useEffect(() => {
        if(props.adminUser !== true){
          history.push("/");
        }
      });
    // console.log('PROPS en ListarNoticias: ', props)
    return (
        <Container className='container my-3 py-3 shadow-lg'>
            <h3 className='text-center my-3 py-3 bg-warning text-light'>Listado de Noticias</h3>
            <Table responsive>
                <thead>
                    <tr className="textoNoticia">
                        <th>Fecha</th>
                        <th>Autor</th>
                        <th>Categoría</th>
                        <th>Titulo</th>
                        <th>Descripción Breve</th>
                        <th>Acciones</th>
                        <th></th>
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
