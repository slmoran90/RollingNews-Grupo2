import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ItemNoticiaxCateg = (props) => {
    // console.log(props.info)
    return (
        <tr className="textoNoticia">
            <td>{props.info.fechaNoticia}</td>
            <td>{props.info.autorNoticia}</td>
            <td>{props.info.tituloNoticia}</td>
            <td>{props.info.noticiaBreve}</td>
            
            <td><Link className='btn btn-primary text-light' to={'/noticia/'+props.info.categoria+'/'+props.info.id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link></td>
            {/* <td className='text-center'><Link className='btn btn-primary text-light mr-3' to={'/noticias/mostrarNoticia/'+props.info.id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </Link></td> */}
        </tr>
    );
};

export default ItemNoticiaxCateg;
