import React from 'react';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const ItemNoticia = (props) => {
    // console.log('props en ItemNoticia: ',props)

 // borrar noticia segun el ID
    const eliminaNoticia = (idNoticia)=>{
    Swal.fire({
        title: 'Quiere eliminar la Noticia?',
        text: "No puede volver atrás esta operación luego de eliminar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then(async(result) => {
        if (result.isConfirmed) {
                try{
                const URL = `${process.env.REACT_APP_API_URLnoticias}/${idNoticia}`;
                // console.log(URL);
                const respuesta = await fetch(URL,{
                    method:"DELETE",
                    headers:{"Content-Type":"application/json"}
                });
                console.log('respuesta de DELETE: ',respuesta)
                if (respuesta.status===200){
                    Swal.fire(
                        'Noticia Eliminada!',
                        'La Noticia seleccionada fue correctamente eliminada.',
                        'success'
                    )
                    props.consultarAPInoticias();
                }
            }catch(error){
                console.log(error)
                // agregar ventana de error
                Swal.fire(
                    'Se ha producido un Error!',
                    'Intentelo nuevamente en unos minutos',
                    'warning'
                )
            }
        }
    })
}   


    return (
        <tr className="textoNoticia">
            <td>{props.info.fechaNoticia}</td>
            <td>{props.info.autorNoticia}</td>
            <td>{props.info.tituloNoticia}</td>
            <td>{props.info.noticiaBreve}</td>
            
            <td><Link className='btn btn-warning text-light' to={'/noticias/editar/'+props.info.id}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></Link></td>
            <td><Button variant='danger' onClick={()=> eliminaNoticia(props.info.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button></td>
        </tr>
    );
};

export default ItemNoticia;