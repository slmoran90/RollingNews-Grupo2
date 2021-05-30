import React from 'react';
import {ListGroup,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';


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
        <ListGroup.Item className='row d-flex justify-content-center'>
            <div className='col-sm-12 col-md-6'>
                <p className='font-weight-bold text-dark'>{props.categoria.nombreCategoria}</p>
            </div>
            <div className='col-sm-12 col-md-6 d-flex justify-content-end'>
            
            <Button variant='danger' className='mr-2' onClick={()=> eliminarCategoria(props.categoria.id)}><FontAwesomeIcon className="text-light" icon={faTrashAlt} size="lg"></FontAwesomeIcon></Button>
                {/* <Button variant='danger' className='mr-2' onClick={()=> eliminarCategoria(props.categoria.id)}><FontAwesomeIcon icon={faTrashAlt} size='1x'></FontAwesomeIcon></Button> */}
                <Button variant='warning text-light' className='mr-2'><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></Button>
                <Link className='btn btn-primary text-light' to={'/noticias/listar/'+props.categoria.nombreCategoria}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link>
            </div>
        </ListGroup.Item>
    );
};

export default ItemCategoria;