import React, { useEffect, useState } from 'react';
import { Form,Button, Container, Alert } from "react-bootstrap";
import Swal from 'sweetalert2'
// importo archivo de validaciones
import { campoRequerido } from "../common/helpers"

const NuevaCategoria = (props) => {

     // URL de categorias
    const URL = process.env.REACT_APP_API_URL;

    const [nombreCategoria,setNombreCategoria] = useState('');
    const [descripCategoria,setDescripCategoria] = useState('');
    // const [categoriaEncontrada,setCategoriaEncontrada] = useState([]);

    // state con variable booleana para mostrar u ocultar el alert. Para que react renderice
    const[error,setError] = useState(false);
    const[mensajeError,setMensajeError] = useState('');

    useEffect(() => {
        setNombreCategoria('');
        setDescripCategoria('');
        setError(false);
        setMensajeError('');
    }, [nombreCategoria,descripCategoria,error]);

    // guardar nueva categoria
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        setMensajeError('');

        //== validacion de datos antes de guardar
        if (campoRequerido(nombreCategoria) &&
            campoRequerido(descripCategoria) && descripCategoria.length>=10) {
            // SIN errores en los datos cargados
            setError(false);
            //== verifica que NO exista el nombre de categoria ===
            buscarCategoria();
            //====================================================
            if (error === false){
                // === guarda en la API ===
                const categoria = {
                    nombreCategoria: nombreCategoria,
                    descripCategoria: descripCategoria
                }
                try{
                    const datosEnviar = {
                        method: "POST", 
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(categoria)
                    }
                
                    // hace POST a la api
                    const respuesta = await fetch(URL,datosEnviar);
                    console.log(respuesta);
                    if(respuesta.status===201){
                        Swal.fire(
                            'Categoría Agregada!',
                            'Se registró la nueva categoría.',
                            'success'
                        )
                        //limpiar imputs
                        setNombreCategoria('');
                        setDescripCategoria('');
                        setError(false);
                        setMensajeError('');

                        //actualiza lista de categorias
                        props.consultarAPI();
                    }
                }catch(error){
                    console.log(error);
                    Swal.fire(
                    'Ocurrió un Error!',
                    'Inténtelo en unos minutos.',
                    'error'
                    )
                }
            }
        } else {
            setError(true);
            setMensajeError("Error en la carga de Datos. Verifique.");
            return;
        }
    }

    // Verifica si ya existe la categoria ingresada. Siempre devuelve status=200, por eso pregunto por
    // la longitud del arreglo que devuelve
    const buscarCategoria = async () =>{
        try {
            const URL = `${process.env.REACT_APP_API_URL}/?nombreCategoria=${nombreCategoria}`;
            const respuesta = await fetch(URL);
            const categoriaEncontrada = await respuesta.json();
            // setCategoriaEncontrada(categoriaEncontrada);
            
            console.log("array encontrado: "+categoriaEncontrada)
            console.log("long array encontrado: "+categoriaEncontrada.length)
            //no uso status===200 xq aunque no exista me devuelve arreglo vacio
            if (categoriaEncontrada.length === 0) {
                // categoria NO existe => puede dar alta
                setError(false);
                setMensajeError('');
            } else {
                // SI Existe categoria
                setError(true);
                setMensajeError("Ya existe la categoría.")
            }
        } catch (error) {
            console.log("error en fetch buscarCategoria");
        }
    }

    return (
        <Container>
        <Form className="mx-5" onSubmit={handleSubmit}>    
            <h1 className="display-5 text-center py-3">Agregar Nueva Categoría</h1>
            <Form.Group className='py-2'>
                <Form.Label>Nombre de la Categoría *</Form.Label>
                <Form.Control type="text" placeholder="Nombre de la Categoria" onChange={(e)=> {setNombreCategoria(e.target.value)}} required/> 
            </Form.Group>

            <Form.Group className='py-2'>
                <Form.Label>Descripción de la Categoría (más de 10 caracteres) *</Form.Label>
                <Form.Control type="text" placeholder="Descripción" onChange={(e)=> {setDescripCategoria(e.target.value)}} required/>
            </Form.Group>
            
            <Button variant="secondary" block className='mb-4' type='submit'>
                Agregar Categoría
            </Button>
        
            {(error===true)?(<Alert variant='warning'>{mensajeError}</Alert>):null}           
        </Form>
    </Container> 
    );
};

export default NuevaCategoria;