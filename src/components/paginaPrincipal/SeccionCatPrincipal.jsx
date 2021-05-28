import React from "react";
import { Container } from "react-bootstrap";
import CardNoticia from "./CardNoticia";


const SeccionCatPrincipal = (props) => {
    return (
        <div>
            {props.categoria[0] && (
                <Container>
                    <h3>{props.categoria[0].categoria}</h3>
                    <div className='d-flex justify-content-around'>
                        {props.categoria.map((categoria) => (
                            <CardNoticia noticia={categoria} width={"18rem"} key={categoria.id}/>
                        ))}
                    </div>
                </Container>
            )}
        </div>
    );
};

export default SeccionCatPrincipal;
