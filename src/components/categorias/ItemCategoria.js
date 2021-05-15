import React from 'react';
import {ListGroup,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ItemCategoria = (props) => {
    // borrar categoria
    const eliminarCategoria = (idCategoria)=>{
        Swal.fire({
            title: 'Quiere eliminar la Categoría?',
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
                    const URL = `${process.env.REACT_APP_API_URLcategorias}/${idCategoria}`;
                    // console.log(URL);
                    const respuesta = await fetch(URL,{
                        method:"DELETE",
                        headers:{"Content-Type":"application/json"}
                    });
                    if (respuesta.status===200){
                        Swal.fire(
                            'Categoría Eliminada!',
                            'La categoría seleccionada fue correctamente eliminada.',
                            'success'
                        )
                        //actualizar los datos de la api
                        props.consultarAPIcategorias();
                    }
                }catch(error){
                    console.log("error en catch item noticia")
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
        <ListGroup.Item className='d-flex justify-content-between'>
        <p className='font-weight-bold'>{props.categoria.nombreCategoria}</p>
        <div>
            <Button variant='danger' className='mr-3' onClick={()=> eliminarCategoria(props.categoria.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>
            
            <Link className='btn btn-primary text-light mr-3' to={'/noticias/listar/'+props.categoria.nombreCategoria}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Ver Noticias</Link>
        </div>
    </ListGroup.Item>
    );
};

export default ItemCategoria;