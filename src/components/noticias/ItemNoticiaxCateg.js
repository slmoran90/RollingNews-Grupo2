import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


const ItemNoticiaxCateg = (props) => {
    return (
        <tr className="textoNoticia">
            {
            (props.info.destacada==="true") ? <td className='text-center'><FontAwesomeIcon icon={faClipboardCheck} size="2x" color="orange"></FontAwesomeIcon></td> : <td></td>
            }
            <td>{props.info.fechaNoticia}</td>
            <td>{props.info.tituloNoticia}</td>
            <td>{props.info.noticiaBreve}</td>
            <td>{props.info.autorNoticia}</td>
            
            {/* enlace a ComponenteNoticia.js de GS */}
            {/* <td><Link className='btn btn-primary text-light' to={'/noticia/'+props.info.categoria+'/'+props.info.id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link></td> */}
            
            <td className='text-center'><Link className='btn btn-primary text-light mr-3' to={'/noticias/mostrarNoticia/'+props.info.id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </Link></td>
        </tr>
    );
};

export default ItemNoticiaxCateg;
