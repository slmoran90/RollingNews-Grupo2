import React from "react";
import CardNoticia from "./CardNoticia";
import CardNoticiaPrincipal from "./CardNoticiaPrincipal";

const NoticiasDestacadas = (props) => {
    return (
        <div className="container-fluid d-flex p-3 justify-content-around">
            <div>
                <h2 className="mb-5 text-center border-bottom">
                    Noticias destacadas
                </h2>
                {props.noticias[0] && (
                    <CardNoticiaPrincipal
                        noticia={props.noticias[0]}
                        width={"30rem"}
                    />
                )}
            </div>
            <div className="d-flex flex-column justify-content-between">
                {props.noticias[1] && (
                    <CardNoticia noticia={props.noticias[1]} width={"18rem"} />
                )}
                {props.noticias[2] && (
                    <CardNoticia noticia={props.noticias[2]} width={"18rem"} />
                )}
            </div>
        </div>
    );
};

export default NoticiasDestacadas;
