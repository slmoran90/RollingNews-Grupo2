import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ItemListaPorCategoria from "./noticiasUsuario/ItemListaPorCategoria";

const ListaPorCategoriaUser = () => {
    const { categoria } = useParams();
    const [listaDeNoticias, setListaDeNoticias] = useState([]);
    const UrlListaNoticias = `${process.env.REACT_APP_API_URLnoticias}/noticias-por-categoria/${categoria}`;

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
            <h1 className='text-center pt-3'>{listaDeNoticias[0] && listaDeNoticias[0].categoria}</h1>
            <Row className='justify-content-center'>
                <Col className='' xs={12} md={8}>
                    <ol id='lista3'>
                        {listaDeNoticias &&
                            listaDeNoticias.map((noticia, indice) => (
                                <div>
                                    
                                <ItemListaPorCategoria noticia={noticia} indice={indice} key={noticia._id} />
                                <hr></hr>
                                </div>
                            ))}
                    </ol>
                </Col>
                <Col md='auto'>

                </Col>
            </Row>
        </div>
    );
};

export default ListaPorCategoriaUser;
