import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faClipboardCheck, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
// libreria para trabajar con fechas
import moment from 'moment';
import 'moment/locale/es'; 

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
            
            {/* == enlace a componente editarNoticia.js == */}
            <Link className='btn btn-outline-warning mr-3 mt-2' to={'/noticias/editar/'+props.info._id}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></Link>
            
        </tr>
    );
};

export default ItemNoticiaxCateg;
