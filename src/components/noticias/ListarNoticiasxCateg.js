import React,{useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
// hoook para usar parametros
import {useParams} from 'react-router-dom';
import ItemNoticia from './ItemNoticia';
import Swal from 'sweetalert2'

const ListarNoticiasxCateg = () => {
    // obtener el parametro de la URL
    console.log(useParams().nombreCategoria);
    const parametroCategoria = useParams().nombreCategoria;
    
    // state para almacenar resultados del fetch
    const [noticias, setNoticias] = useState([]);

    // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias+'/?categoria='+parametroCategoria;

    useEffect(async ()=>{
        // buscar las noticias que tengan las categoria pasada como parametro en la URL
        try{
            const respuesta = await fetch(URLnoticias);
            if(respuesta.status===200){
                const noticiasFiltradas = await respuesta.json();
                setNoticias(noticiasFiltradas);
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
        <Container className='container my-3 py-3 shadow-lg'>
            <h1 className='text-center my-3 py-3 bg-warning text-light'>Categoria: {parametroCategoria}</h1>
            {/* definicion de sistema de grillas para las cards de noticias */}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                noticias.map((valor,indice)=><ItemNoticia key={indice} info={valor}></ItemNoticia>)
                }
            </div>
        </Container>
    );
};

export default ListarNoticiasxCateg;