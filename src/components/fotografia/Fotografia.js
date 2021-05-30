import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import Swal from 'sweetalert2'
import ItemFotografia from './ItemFotografia';

const Fotografia = () => {
    // state para almacenar resultados del fetch
    const [fotografias, setFotografias] = useState([]);

    // URL donde estan almacenadas las fotografias
    const URLfotografias = process.env.REACT_APP_API_URLfotografias;

    useEffect(async () => {
        // buscar las noticias que tengan las categoria pasada como parametro en la URL
        try {
            const respuesta = await fetch(URLfotografias);
            if (respuesta.status === 200) {
                const listaFotografias = await respuesta.json();
                setFotografias(listaFotografias);
            }
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Ocurrió un Error!',
                'Inténtelo en unos minutos.',
                'error'
            )
        }
    }, [])

    return (
        <Container className='margenListaNoticias mb-3'>
            <h1 className='text-center my-3 py-3 fondoTitulo text-light'>Fotografias</h1>
            {/* definicion de sistema de grillas para las cards de noticias */}
            <Row xs={1} md={3}>
                {
                    fotografias.map((valor, indice) => <ItemFotografia key={indice} info={valor}></ItemFotografia>)
                }
            </Row>
        </Container>
    );
};
export default Fotografia;
