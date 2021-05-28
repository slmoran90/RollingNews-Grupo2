import React from "react";
import { CardDeck } from "react-bootstrap";
import ItemListaNoticiasRelacionadas from "./ItemListaNoticiasRelacionadas";

const ListaNoticiasRelacionadas = (props) => {

    return (
        <div>
            {props.listaNoticias && (
                <CardDeck className='d-flex flex-wrap justify-content-around'>
                    {props.listaNoticias.map((noticia) => (
                        <ItemListaNoticiasRelacionadas
                            noticia={noticia}
                            key={noticia.id}
                        />
                    ))}
                </CardDeck>
            )}
        </div>
    );
};

export default ListaNoticiasRelacionadas;
