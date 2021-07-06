import React, {useEffect} from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';
import Swal from 'sweetalert2';
import { withRouter, useHistory} from "react-router-dom";

const ListarNoticias = (props) => {
    // ordenar por fecha DESCENDENTE antes de mostrarlas    
    const noticiasOrdenadas = props.noticias.sort((a, b) => new Date(b.fechaNoticia).getTime() - new Date(a.fechaNoticia).getTime());

    let history = useHistory();
    useEffect(() => {
        if(props.adminUser !== true){
          history.push("/");
        }
      });
    // console.log('PROPS en ListarNoticias: ', props)
    return (
        <Container className="py-2 margenFondo">
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
    );
};
export default ListarNoticias;