import React from 'react';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ItemNoticia = (props) => {
    
    const eliminaNoticia = () =>{
        console.log("elimina noticia")
    }
    console.log(props.info)
    return (
        <tr className="textoNoticia">
            <td>{props.info.fechaNoticia}</td>
            <td>{props.info.autorNoticia}</td>
            <td>{props.info.tituloNoticia}</td>
            <td>{props.info.noticiaBreve}</td>
            <td className='text-center'><Link className='btn btn-primary text-light mr-3' to={'/noticias/editar/'+props.info.id}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon> </Link></td>
            <td className='text-center'><Button variant='danger' className='mr-2' onClick={()=> eliminaNoticia(props.info.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button></td>
        </tr>
    );
};

export default ItemNoticia;