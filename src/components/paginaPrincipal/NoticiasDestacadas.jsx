import React from "react";
import Weather from "../APIs/Weather";
import CardNoticia from "./CardNoticia";

const NoticiasDestacadas = (props) => {
    return (
        <div className="container-fluid d-flex p-3 justify-content-around flex-wrap">
            <div>
                <h2 className="mb-5 text-center border-bottom">
                    Noticias destacadas
                </h2>
                <div className='d-flex flex-column'>
                    {props.noticias[0] && (
                        <CardNoticia
                            noticia={props.noticias[0]}
                            width={"30rem"}
                        />
                    )}
                    <Weather className='mt-5'/>
                </div>
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
