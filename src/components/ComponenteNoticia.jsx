import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ComponenteNoticia = () => {
    const {id} = useParams();

    const [noticiaVisible, setNoticiaVisible] = useState({});

    const URL = `${process.env.REACT_APP_API_NOTICIAS_URL}/${id}`; 
    console.log("🚀 ~ file: ComponenteNoticia.jsx ~ line 10 ~ ComponenteNoticia ~ URL", URL)

    useEffect(() => {
         traerNoticiaVisible();
    }, [])

    const traerNoticiaVisible = async () => {
        try {
            const resp = await fetch(URL);
            if(resp.status === 200){
                const noticia = await resp.json();
                setNoticiaVisible(noticia);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>{noticiaVisible.tituloNoticia}</h1>
            <img src={noticiaVisible.imagenPrincipal} alt='Imágen de la noticia'/>
            <p>{noticiaVisible.noticiaDetallada}</p>
            <p>categoría: {noticiaVisible.categoria}</p>
            <p>Autor: {noticiaVisible.autorNoticia}</p>
            <p>Fecha: {noticiaVisible.fechaNoticia}</p>
        </div>
    );
};

export default ComponenteNoticia;