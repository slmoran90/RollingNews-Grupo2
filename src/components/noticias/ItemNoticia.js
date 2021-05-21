import React from 'react';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ItemNoticia = (props) => {
    // console.log(props)
    const eliminaNoticia = () =>{
        console.log("elimina noticia")
    }

    return (
        <tr className="textoNoticia">
            <td>{props.info.fechaNoticia}</td>
            <td>{props.info.autorNoticia}</td>
            <td>{props.info.tituloNoticia}</td>
            <td>{props.info.noticiaBreve}</td>
            
            <td className='text-center'><Link className='btn btn-warning text-light' to={'/noticias/editar/'+props.info.id}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon> </Link></td>
            <td className='text-right'><Button variant='danger' onClick={()=> eliminaNoticia(props.info.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button></td>
        </tr>
    );
};

export default ItemNoticia;