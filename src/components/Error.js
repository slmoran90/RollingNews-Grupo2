import React from 'react';
import { Button } from 'react-bootstrap';
import "./error.css"

const Error = () => {
    return (
        <div className="d-flex text-light position-relative">
            <img className="gif-background position-relative w-100" src="/world.gif" alt="mundo noticias"></img>
            <div className="position-absolute top-0 start-0 translate-middle">
                <h1 className="display-1">ERROR 404</h1>
                <h2 className="mt-3">Oops...No se encontro la página</h2>
                <Button href="/" type="button" className="botonvolver m-4">Volver</Button>
            </div>
            <div className="position-absolute caja">
                <h5 className="mt-3"><b>Estamos trabajando duro para<br></br> solucionar el problema...</b></h5>
            </div>
        </div>
    );
};

export default Error;