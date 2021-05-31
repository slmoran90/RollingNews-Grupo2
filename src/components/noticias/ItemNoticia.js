import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faTrashAlt,faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const ItemNoticia = (props) => {
    
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
                Swal.fire(
                    'Se ha producido un Error!',
                    'Intentelo nuevamente en unos minutos',
                    'warning'
                )
            }
        }
    })
    }   

    // const fechaLocal = (fecha) =>{
    //     // let date = new Date()
    //     console.log('parametro fecha:',fecha.toString())
    //     let fechaS=fecha.toString();
    //     let anio=fechaS.substring(0,4);
    //     let mes=fechaS.substring(5,7);
    //     let dia=fechaS.substring(8,10);
    //     console.log(props.info.fechaNoticia.substring(8,10)+'-'+props.info.fechaNoticia.substring(5,7)+'-'+props.info.fechaNoticia.substring(0,4))
    //     // fechaS.substring(8,10)+'-'+fechaS.substring(5,7)+'-'+fechaS.substring(0,4))
        
    //     return fechaModificada
    // }

    return (
        <tr className="textoNoticia">
            {
            (props.info.destacada==="on") ? <td className='text-center'><FontAwesomeIcon icon={faClipboardCheck} size="2x" color="orange"></FontAwesomeIcon></td> : <td></td>
            }
            <td className='text-center'>{props.info.fechaNoticia.substring(8,10)+'-'+props.info.fechaNoticia.substring(5,7)+'-'+props.info.fechaNoticia.substring(0,4)}</td>
            <td>{props.info.categoria}</td>
            <td>{props.info.tituloNoticia}</td>
            <td className='d-none d-md-table-cell'>{props.info.noticiaBreve}</td>
            <td>{props.info.autorNoticia}</td>
        
            <td className='in-line'>
                <Link className='btn btn-warning text-light mb-2' to={'/noticias/editar/'+props.info.id}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></Link>
                <Button variant='danger' onClick={()=> eliminaNoticia(props.info.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>
            </td>
            {/* <td><Link className='btn btn-warning text-light' to={'/noticias/editar/'+props.info.id}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></Link></td> */}
            {/* <td><Button variant='danger' onClick={()=> eliminaNoticia(props.info.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button></td> */}
        </tr>
    );
};
export default ItemNoticia;











