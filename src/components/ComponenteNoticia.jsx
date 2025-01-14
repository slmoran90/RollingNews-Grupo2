import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ListaNoticiasRelacionadas from "./paginaPrincipal/ListaNoticiasRelacionadas";
import PublicidadLeon from "./paginaPrincipal/PublicidadLeon";
// libreria para trabajar con fechas
import moment from 'moment';
import 'moment/locale/es';

const ComponenteNoticia = () => {
    const { categoria, id } = useParams();

    const [noticiaVisible, setNoticiaVisible] = useState({});
    const [listaNoticiasCat, setListaNoticiasCat] = useState([]);

    const URL = `${process.env.REACT_APP_API_URLnoticias}/noticias-por-id/${id}`;
    const UrlListaNoticias = `${process.env.REACT_APP_API_URLnoticias}/noticias-por-categoria/${categoria}`;
    

    useEffect(() => {
        traerNoticiaVisible();
    }, [id, categoria]);
    
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

        try {
            const resp = await fetch(UrlListaNoticias);
            if (resp.status === 200) {
                const lista = await resp.json();
                setListaNoticiasCat(lista);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            { listaNoticiasCat &&
        <Fragment>
            <Row className='justify-content-around margenSup'>
                <Col xs={12} md={8} >
                    <div className="container d-flex nowrap ">
                        <div className="mr-5">
                            <div>
                                <div className='d-flex flex-wrap justify-content-center'>
                                <h2 className="text-center tituloNoticia">
                                    {noticiaVisible.tituloNoticia}
                                </h2>
                                <img
                                    className="w-75"
                                    src={noticiaVisible.imagenPrincipal}
                                    alt="Imágen de la noticia"
                                />
                                </div>
                                <div className=' d-flex flex-column align-items-center'>
                                    <p className='cuerpoNoticia'>{noticiaVisible.noticiaDetallada}</p>
                                    <p>Categoría: {noticiaVisible.categoria}</p>
                                    <p>Autor: {noticiaVisible.autorNoticia}</p>                            
                                    <p className='border-top text-muted'>Fecha: {moment(noticiaVisible.fechaNoticia).locale('es').format("DD-MM-YYYY")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={0} md={4} >
                    <PublicidadLeon />
                </Col>
                </Row>
                <hr></hr>
                <Row className='justify-content-around noticiasRelacionadas'>
                    <Col xs={12} md={6} lg={9}>
                        <h5 className='ml-5 mt-5 noticiasSimilares '>Noticias similares</h5>
                        <div className="">
                            <ListaNoticiasRelacionadas
                                listaNoticias={listaNoticiasCat}
                                />
                        </div>
                    </Col>
                </Row>
        </Fragment>}
        </div>
    );
};

export default ComponenteNoticia;
