import React,{useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2'

// hoook para usar parametros
import {useParams} from 'react-router-dom';

const NoticiaCompleta = () => {
    console.log("en noticia completa")
    // obtener el parametro de la URL
    console.log(useParams().id);
    const parametroID = useParams().id;
    
    // state para almacenar resultados del fetch
    const [noticia, setNoticia] = useState([]);

    // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias+'/?id='+parametroID;

    useEffect(async ()=>{
        // buscar la noticia que tenga el ID pasado como parametro en la URL
        try{
            const respuesta = await fetch(URLnoticias);
            if(respuesta.status===200){
                const noticiaFiltrada = await respuesta.json();
                setNoticia(noticiaFiltrada);
            }
        }catch(error){
            console.log(error);
            Swal.fire(
                'Ocurrió un Error!',
                'Inténtelo en unos minutos.',
                'error'
                )
        }
    },[])
    return (
        <Container>
            <h1>NOTICIA COMPLETA</h1>
        </Container>

    );
};

export default NoticiaCompleta;