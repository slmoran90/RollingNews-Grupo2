import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";


const NuevaNoticia = () => {
    // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias;

    // states con inputs del formulario
    const [tituloNoticia, setTituloNoticia] = useState('');
    const [noticiaBreve, setNoticiaBreve] = useState('');
    const [noticiaDetallada, setNoticiaDetallada] = useState('');
    const [imagenPrincipal, setImagenPrincipal] = useState('');
    const [imagenSec, setImagenSec] = useState('');
    const [categoria, setCategoria] = useState('');
    const [autorNoticia, setAutorNoticia] = useState('');
    const [fechaNoticia, setFechaNoticia] = useState(Date);
    const [noticiaDestacada, setNoticiaDestacada] = useState(false);

    // state para almacenar resultados del fetch
    const [noticiaCompleta, setNoticiaCompleta] = useState({});
    useEffect(() => {
        handleReset();
    }, []);

    //====== limpiar formulario =========
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);

    const handleReset = () => {
        formRef.current.reset();
        setValidated(false);
    };
    //======================================

    // guardar nueva noticia
    const handleSubmit = async (e) => {
        console.log("guarda nueva noticia")
    }

    return (
        <Container className="container my-3 py-3 shadow-lg">
            <h3 className="text-center my-3 py-3 bg-warning text-light">
                Nueva Noticia
            </h3>

            <Form ref={formRef} className='mx-5' onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Categoría:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Categoría" placeholder="Nombre de la Categoria" onChange={(e) => { setCategoria(e.target.value) }} required />
                        {/* <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Seleccione la Categoria</Form.Label>
                            <Form.Control
                                as="select"
                                custom
                                onChange={(e) => setCategoriaNoticia(e.target.value)}
                            >
                                {props.Categorias.map((opcion, indice) => (
                                    <option value={opcion.value} key={indice}>{opcion.nombreCategoria}</option>
                                ))}
                            </Form.Control>
                        </Form.Group> */}
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control type="date" size="sm" onChange={(e) => { setFechaNoticia(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control type="text" size="sm" placeholder="Autor de la Noticia" onChange={(e) => { setAutorNoticia(e.target.value) }} required />
                    </Form.Group>
                </Form.Row>


                <Form.Group>
                    <Form.Label>Titulo Noticia:</Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Titulo de la Noticia" onChange={(e) => { setTituloNoticia(e.target.value) }} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Breve:</Form.Label>
                    <Form.Control as="textarea" rows={3} size="sm" placeholder="Descripción Breve" onChange={(e) => { setNoticiaBreve(e.target.value) }} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción Detallada:</Form.Label>
                    <Form.Control as="textarea" rows={10} size="sm" placeholder="Descripción Detallada" onChange={(e) => { setNoticiaDetallada(e.target.value) }} required />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Imagen Principal:</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Imagen Principal" onChange={(e) => { setImagenPrincipal(e.target.value) }} required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        {/* <img width="300px" src={} required/> */}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Imagen Secundaria (Opcional):</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Imagen Secundaria" onChange={(e) => { setImagenSec(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        {/* <img width="300px" src={} /> */}
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    {/* <Form.Label>Noticia Destacada:</Form.Label> */}
                    <Form.Check type='checkbox' label='Noticia Destacada' onChange={(e) => { setNoticiaDestacada(e.target.value) }} />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                    Agregar Noticia
                </Button>
            </Form>
        </Container>
    );
};

export default NuevaNoticia;
