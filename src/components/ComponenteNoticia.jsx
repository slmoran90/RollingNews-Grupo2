import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router";
import ListaNoticiasRelacionadas from "./paginaPrincipal/ListaNoticiasRelacionadas";

const ComponenteNoticia = () => {
    console.log("en componenteNoticia")
    const { categoria, id } = useParams();

    const [noticiaVisible, setNoticiaVisible] = useState({});
    const [listaNoticiasCat, setListaNoticiasCat] = useState([]);

    const URL = `${process.env.REACT_APP_API_URLnoticias}/${id}`;
    const UrlListaNoticias = `${process.env.REACT_APP_API_URLnoticias}/?categoria=${categoria}`;
    
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
        console.log("noticiavisible: ",noticiaVisible)

        try {
            const resp = await fetch(UrlListaNoticias);
            if (resp.status === 200) {
                const lista = await resp.json();
                setListaNoticiasCat(lista);
                console.log(listaNoticiasCat);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            { listaNoticiasCat &&
        <Fragment>
            <div className="container w-75 d-flex nowrap margenSup">
                <div className="w-75 mr-5">
                    <div>
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
                    <h5>Noticias similares</h5>
                    <div className="d-flex align-content-around">
                        <ListaNoticiasRelacionadas
                            listaNoticias={listaNoticiasCat}
                        />
                    </div>
                </div>
                <div className="w-25">
                    <img
                        className="w-100"
                        src="https://www.totalmedios.com/img/noticias/2019/08/5d443b86e46be__838x390.jpg"
                        alt=""
                    />
                    <img
                        src="https://i.pinimg.com/474x/c2/73/75/c2737544c383c7572b12dd58353bedb7.jpg"
                        alt=""
                    />
                </div>
            </div>
        </Fragment>}
        </div>
    );
};

export default ComponenteNoticia;
