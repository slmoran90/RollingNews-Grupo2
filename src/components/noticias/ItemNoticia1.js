import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ItemNoticia1 = (props) => {
    // console.log(props.info)
    return (
        <tr>
            <td>{props.info.fechaNoticia}</td>
            <td>{props.info.tituloNoticia}</td>
            <td>{props.info.noticiaBreve}</td>
            <td className='text-center'><Link className='btn btn-primary text-light mr-3' to={'/noticias/noticiaCompleta/'+props.info.id}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </Link></td>
        </tr>
    );
};

export default ItemNoticia1;
