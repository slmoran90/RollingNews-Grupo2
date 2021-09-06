import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2'
// importo archivo de validaciones
import { campoRequerido } from "../common/validaciones";
import { withRouter, useParams, useHistory} from "react-router-dom";


const EditarCategoria = (props) => {
    let history = useHistory();

    //obtener codigo de la categoria a modificar por parametro
    const codigoCategoria = useParams().id;

    // URL de categorias
    const URLcategorias = process.env.REACT_APP_API_URLcategorias+'/por-id-categoria/'+codigoCategoria;

    // imputs del formulario
    const [nombreCategoria, setNombreCategoria] = useState('');

    // state para indicar que hay un error en la carga de datos
    const [error, setError] = useState(false);

    // para mostrar por pantalla un mensaje de error durante la carga de datos
    const [mensajeError, setMensajeError] = useState('');

    //creo las variables useRef
    const nombreCategoriaRef = useRef('');

    useEffect(async () => {
        if(props.adminUser !== true){
            history.push("/");
        }

        handleReset();
        // busca categoria enviada por parametro
        try {
            const respuesta = await fetch(URLcategorias);
            if (respuesta.status === 200) {
                const categoriaSolicitada = await respuesta.json();
                setNombreCategoria(categoriaSolicitada);
            }

        } catch (errorValidacion) {
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    }, []);

    //====== limpiar formulario ========
    const formRef = useRef(null);

    const handleReset = () => {
        formRef.current.reset();
        setError(false);
        setMensajeError('');
    };
    //======================================

    // guardar MODIFICACION categoria
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setMensajeError('');

        if (campoRequerido(nombreCategoriaRef.current.value)) {
            // SIN errores en los datos cargados

            //== verifica que NO exista el nombre de categoria ===
            const encontrada = await buscarCategoria();
            //====================================================
            if (encontrada === null ) {    
                try {
                    const categoriaModificada = {
                        nombreCategoria: nombreCategoriaRef.current.value
                    }

                    const respuesta = await fetch(URLcategorias, {
                        method: 'PUT',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(categoriaModificada)
                    });

                    if (respuesta.status === 200) {
                        Swal.fire(
                            'Categoría Modificada!',
                            'Se realizó la modificación de la categoría.',
                            'success'
                        )
                        //limpiar imputs
                        handleReset();

                        //actualiza lista de categorias
                        props.consultarAPIcategorias();

                        //redireccionar
                        props.history.push('/categorias/listar');
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Ocurrió un Error!',
                        'Inténtelo en unos minutos.',
                        'error'
                    )
                }
            } else {
                setError(true);
                setMensajeError("La Categoría ya existe. Verifique.");
            }
        } else {
            setError(true);
            setMensajeError("Error en la carga de Datos. Verifique.");
            return;
        }
    }

    // Verifica si ya existe la categoria ingresada. Si NO existe devuelve encontrada=null
    const buscarCategoria = async () => {
        try {
            const URL = `${process.env.REACT_APP_API_URLcategorias}/por-nombre-categoria/${nombreCategoria}`;
            const respuesta = await fetch(URL);
            
            if (respuesta.status === 200) {
                const encontrada = await respuesta.json();
                return encontrada;
            } 
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Ocurrió un Error!',
                'Inténtelo en unos minutos.',
                'error'
            )
        }
    }

    return (
        <Container className="py-2 main-form">
            <Row className='justify-content-center'>
                <Col xs={12} md={6} className='border borderNC'>
                    <h2 className="text-center my-3 py-3 formTitulos">Editar Categoría</h2>
                    <Form ref={formRef} className="mx-5 " onSubmit={handleSubmit}>
                        <Form.Group className='py-2'>
                            <Form.Label>Nombre de la Categoría<span class="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Nombre de la Categoria" defaultValue={nombreCategoria.nombreCategoria}
                                ref={nombreCategoriaRef} required />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button className='botones mb-3 px-5 py-2 botonGuardar' type='submit'>
                                Guardar Cambios
                            </Button>
                        </div>

                        {/* muetra mensaje de errores durante la carga de datos */}
                        {(error === true) ? (<Alert variant='warning'>{mensajeError}</Alert>) : null}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(EditarCategoria);
