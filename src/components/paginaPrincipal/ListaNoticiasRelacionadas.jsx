import React from "react";
import CardNoticia from "./CardNoticia";
import './cardsNoticias.css'

const ListaNoticiasRelacionadas = (props) => {

    return (
        <div>
            {props.listaNoticias && (
                <div className='d-flex flex-wrap justify-content-around'>
                    {props.listaNoticias.map((noticia) => (
                        <CardNoticia
                            noticia={noticia}
                            key={noticia._id}
                            width={"18rem"}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListaNoticiasRelacionadas;
