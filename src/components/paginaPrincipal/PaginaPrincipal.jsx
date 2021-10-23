import React from "react";
import { Col, Row } from "react-bootstrap";
import CoronaVirusInfo from "./CoronaVirusInfo";
import DolarAndWeather from "./DolarAndWeather";
import NoticiasDestacadas from "./NoticiasDestacadas";
import Publicidad from "./Publicidad";
import Publicidad2 from "./Publicidad2";
import SeccionCatPrincipal from "./SeccionCatPrincipal";

const PaginaPrincipal = (props) => {
    return (
        <section className="margenSup">
            <Row className='justify-content-around'>
                <Col className='' xs={9}>
                    <NoticiasDestacadas noticias={props.noticiasDestacadas} />
                </Col>
            </Row>
            
                <CoronaVirusInfo />
                <DolarAndWeather />
                {props.economia && (
                    <SeccionCatPrincipal categoria={props.economia} />
                )}
                <Publicidad />
                {props.deportes && (
                    <SeccionCatPrincipal categoria={props.deportes} />
                )}
                <Publicidad2 />
                {props.actualidad && (
                    <SeccionCatPrincipal categoria={props.actualidad} />
                )}
            
        </section>
    );
};

export default PaginaPrincipal;
