import React from "react";
import { CardDeck } from "react-bootstrap";
import CardNoticia from "./CardNoticia";
import ItemListaNoticiasRelacionadas from "./ItemListaNoticiasRelacionadas";
import './cardsNoticias.css'

const ListaNoticiasRelacionadas = (props) => {

    return (
        <div>
            {props.listaNoticias && (
                <CardDeck className='d-flex flex-wrap justify-content-around'>
                    {props.listaNoticias.map((noticia) => (
                        <CardNoticia
                            noticia={noticia}
                            key={noticia.id}
                            width={"18rem"}
                        />
                    ))}
                </CardDeck>
            )}
        </div>
    );
};

export default ListaNoticiasRelacionadas;
