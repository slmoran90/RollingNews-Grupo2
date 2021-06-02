import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2'
// importo archivo de validaciones
import { campoRequerido } from "../common/validaciones";
import { withRouter, useHistory} from "react-router-dom";


const NuevaCategoria = (props) => {
    let history = useHistory();
    // URL de categorias
    const URLcategorias = process.env.REACT_APP_API_URLcategorias;

    // imputs del formulario
    const [nombreCategoria, setNombreCategoria] = useState('');

    // state para indicar que hay un error en la carga de datos
    const [error, setError] = useState(false);

    // para mostrar por pantalla un mensaje de error durante la carga de datos
    const [mensajeError, setMensajeError] = useState('');

    useEffect(() => {
        handleReset();
        if(props.adminUser !== true){
            history.push("/");
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

    // guardar NUEVA categoria
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setMensajeError('');

        if (campoRequerido(nombreCategoria)) {
            // SIN errores en los datos cargados

            //== verifica que NO exista el nombre de categoria ===
            const encontrada = await buscarCategoria();
            //====================================================
            if (encontrada.length === 0) {
                // === NO EXISTE CATEGORIA => guarda en la API categorias ===
                const categoria = {
                    nombreCategoria: nombreCategoria
                    // descripCategoria: descripCategoria
                }
                try {
                    const datosEnviar = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(categoria)
                    }

                    // hace POST a la api
                    const respuesta = await fetch(URLcategorias, datosEnviar);

                    if (respuesta.status === 201) {
                        Swal.fire(
                            'Categoría Agregada!',
                            'Se registró la nueva categoría.',
                            'success'
                        )
                        //limpiar imputs
                        handleReset();

                        //actualiza lista de categorias
                        props.consultarAPIcategorias();
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

    // Verifica si ya existe la categoria ingresada. Siempre devuelve status=200, por eso pregunto por
    // la longitud del arreglo que devuelve
    const buscarCategoria = async () => {
        try {
            const URL = `${process.env.REACT_APP_API_URLcategorias}/?nombreCategoria=${nombreCategoria}`;
            const respuesta = await fetch(URL);

            if (respuesta.status === 200) {
                const encontrada = await respuesta.json();
                return encontrada;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="py-2 main-form">
            <Row className='justify-content-center'>
                <Col xs={12} md={6} className='border borderNC'>
                    <h2 className="text-center my-3 py-3 formTitulos">Nueva Categoría</h2>
                    <Form ref={formRef} className="mx-5 " onSubmit={handleSubmit}>
                        <Form.Group className='py-2'>
                            <Form.Label>Nombre de la Categoría<span class="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Nombre de la Categoria" onChange={(e) => { setNombreCategoria(e.target.value) }} required />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button className='botones mb-3 px-5 py-2' type='submit'>
                                Guardar
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

export default withRouter(NuevaCategoria);
