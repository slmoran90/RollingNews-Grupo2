import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router";

const ComponenteNoticia = () => {
    const { id } = useParams();

    const [noticiaVisible, setNoticiaVisible] = useState({});

    const URL = `${process.env.REACT_APP_API_NOTICIAS_URL}/${id}`;
    console.log(
        "🚀 ~ file: ComponenteNoticia.jsx ~ line 10 ~ ComponenteNoticia ~ URL",
        URL
    );

    useEffect(() => {
        traerNoticiaVisible();
    }, []);

    const traerNoticiaVisible = async () => {
        try {
            const resp = await fetch(URL);
            if (resp.status === 200) {
                const noticia = await resp.json();
                setNoticiaVisible(noticia);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Fragment>
            <div className="container w-75 d-flex nowrap">
                <div className="w-75 mr-5">
                    <h2 className="text-center">
                        {noticiaVisible.tituloNoticia}
                    </h2>
                    <img
                        className="w-100"
                        src={noticiaVisible.imagenPrincipal}
                        alt="Imágen de la noticia"
                    />
                    <p>{noticiaVisible.noticiaDetallada}</p>
                    <p>categoría: {noticiaVisible.categoria}</p>
                    <p>Autor: {noticiaVisible.autorNoticia}</p>
                    <p>Fecha: {noticiaVisible.fechaNoticia}</p>
                </div>
                <div className='w-25'>
                    <img className='w-100' src='https://www.totalmedios.com/img/noticias/2019/08/5d443b86e46be__838x390.jpg' alt=''/>
                    <img src='https://i.pinimg.com/474x/c2/73/75/c2737544c383c7572b12dd58353bedb7.jpg' alt='' />
                    <h5>Noticias similares</h5>
                    
                </div>
            </div>
        </Fragment>
    );
};

export default ComponenteNoticia;
