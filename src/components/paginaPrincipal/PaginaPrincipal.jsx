import React from "react";
import { Col, Row } from "react-bootstrap";
import { Sticky, StickyContainer } from "react-sticky";
import CoronaVirusInfo from "./CoronaVirusInfo";
import DolarAndWeather from "./DolarAndWeather";
import NoticiasDestacadas from "./NoticiasDestacadas";
import Publicidad from "./Publicidad";
import PublicidadLeon from "./PublicidadLeon";
import SeccionCatPrincipal from "./SeccionCatPrincipal";

const PaginaPrincipal = (props) => {
    return (
        <section className="margenSup">
            <Row>
                <Col xs={8}>
                    <NoticiasDestacadas noticias={props.noticiasDestacadas} />
                </Col>
                <Col xs={2}>
                    <PublicidadLeon />
                </Col>
            </Row>
            
                <CoronaVirusInfo />
                <DolarAndWeather />
                {props.economia && (
                    <SeccionCatPrincipal categoria={props.economia} />
                )}
                {props.deportes && (
                    <SeccionCatPrincipal categoria={props.deportes} />
                )}
                <Publicidad />
                {props.actualidad && (
                    <SeccionCatPrincipal categoria={props.actualidad} />
                )}
            
        </section>
    );
};

export default PaginaPrincipal;
