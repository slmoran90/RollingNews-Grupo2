import React from "react";
import {Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faTrashAlt,
    faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

const ItemCategoria = (props) => {
    //console.log("props itemcategoria: ",props)

    // borrar categoria
    const eliminarCategoria = (idCategoria) => {
        console.log("id categoria a eliminar:",idCategoria)
        Swal.fire({
            title: "Está seguro que quiere eliminar la Categoría?",
            text: "No podrá volver atrás esta operación luego de realizarla.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const URL = `${process.env.REACT_APP_API_URLcategorias}/por-id-categoria/${idCategoria}`;
                    const respuesta = await fetch(URL, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                    if (respuesta.status === 200) {
                        Swal.fire(
                            "Categoría Eliminada!",
                            "La categoría seleccionada fue correctamente eliminada.",
                            "success"
                        );
                        //actualizar los datos de la api
                        props.consultarAPIcategorias();
                    } 
                } catch (error) {
                    console.log(error);
                    // agregar ventana de error
                    Swal.fire(
                        "Se ha producido un Error!",
                        "Intentelo nuevamente en unos minutos",
                        "warning"
                    );
                }
            }
        });
    };
    return (
        <tr>
            <td className='font-weight-bold text-dark pl-3'> {props.categoria.nombreCategoria}</td>
            <td className='text-center'>
                <Button variant=""
                    className="btn btn-outline-danger mr-2" onClick={() => eliminarCategoria(props.categoria._id)}>
                    <FontAwesomeIcon icon={faTrashAlt} size="auto"></FontAwesomeIcon>
                </Button>

                {/* <Button variant="" className="btn btn-outline-warning mr-2" size="auto">
                    <FontAwesomeIcon icon={faPencilAlt} size="auto"></FontAwesomeIcon>
                </Button> */}

                <Link className='btn btn-outline-warning mr-2' to={'/categorias/editar/' + props.categoria._id}>
                    <FontAwesomeIcon icon={faPencilAlt} size="auto"></FontAwesomeIcon>
                </Link>

                <Link className='btn btn-outline-primary' to={'/noticias/listar/' + props.categoria.nombreCategoria}>
                    <FontAwesomeIcon icon={faSearch} size="auto"></FontAwesomeIcon>
                </Link>
            </td>
        </tr>        
    );
};

export default ItemCategoria; 
