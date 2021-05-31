import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ItemListaPorCategoria from "./noticiasUsuario/ItemListaPorCategoria";

const ListaPorCategoriaUser = () => {
    const { categoria } = useParams();
    const [listaDeNoticias, setListaDeNoticias] = useState([]);

    const UrlListaNoticias = `${process.env.REACT_APP_API_URLnoticias}/?categoria=${categoria}`;

    useEffect(() => {
        traerListaDeCategoria();
    }, [categoria]);

    const traerListaDeCategoria = async () => {
        try {
            const resp = await fetch(UrlListaNoticias);
            
            if (resp.status === 200) {
                const lista = await resp.json();
                const listaRevertida = lista.reverse();
                
                setListaDeNoticias(listaRevertida);
            }
        } catch (error) {
            console.log(error);
        };
    };
    return (
        <div className="container margenSup">
            <h1>{listaDeNoticias[0] && listaDeNoticias[0].categoria}</h1>
            <Row>
                <Col className='' xs={12} md={8}>
                    <ul>
                        {listaDeNoticias &&
                            listaDeNoticias.map((noticia, indice) => (
                                <ItemListaPorCategoria noticia={noticia} indice={indice} key={noticia.id} />
                            ))}
                    </ul>
                </Col>
                <Col md='auto'>

                </Col>
            </Row>
        </div>
    );
};

export default ListaPorCategoriaUser;
