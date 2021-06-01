import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="d-flex text-light position-relative margenFondo">
            <img className="position-relative w-100" src="/error-404.jpg" alt="background"></img>
            <div className="position-absolute cartel m-5">
                <div className="d-none d-md-block"> 
                <h1 className="display-3 p-2">ERROR</h1>
                <h2 className="mt-3">No se encontro la <br />página</h2>
                </div> 
                <div className="justify-content-start">   
                <Link className="nav-link" to="/" exact>
                <Button className="botones m-4 w-25">Volver</Button></Link>
                </div> 
            </div>
        </div>
    );
};

export default Error;