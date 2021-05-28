import React from 'react';
import { Button } from 'react-bootstrap';
import "./error.css"

const Error = () => {
    return (
        <div className="d-flex text-light position-relative">
            <img className="position-relative w-100" src="/error-404.jpg" alt="background"></img>
            <div className="position-absolute cartel m-5">
                <h1 className="display-3 p-2">ERROR</h1>
                <h2 className="mt-3">No se encontro la <br />página</h2>
                <Button type="button" className="botonvolver m-4 w-25" to="/">Volver</Button>
            </div>
        </div>
    );
};

export default Error;