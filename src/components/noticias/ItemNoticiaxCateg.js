import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


const ItemNoticiaxCateg = (props) => {
    return (
        <tr className="textoNoticia">
            {
            (props.info.destacada==="on") ? <td className='text-center'><FontAwesomeIcon icon={faClipboardCheck} size="2x" color="orange"></FontAwesomeIcon></td> : <td></td>
            }
            <td className='text-center'>{props.info.fechaNoticia.substring(8,10)+'-'+props.info.fechaNoticia.substring(5,7)+'-'+props.info.fechaNoticia.substring(0,4)}</td>
            <td>{props.info.tituloNoticia}</td>
            <td className='d-none d-md-table-cell'>{props.info.noticiaBreve}</td>
            <td className='d-none d-md-table-cell'>{props.info.autorNoticia}</td>
            
            {/* enlace a ComponenteNoticia.js de GS */}
            {/* <td><Link className='btn btn-primary text-light' to={'/noticia/'+props.info.categoria+'/'+props.info.id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link></td> */}
            
            {/* == enlace a componente VI == */}
            <td className='text-center'><Link className='btn btn-outline-primary mr-3' to={'/noticias/mostrarNoticia/'+props.info._id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </Link></td>
        </tr>
    );
};

export default ItemNoticiaxCateg;
