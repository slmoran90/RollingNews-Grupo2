import React, { useEffect, useState } from "react";
import { Card, Carousel, ListGroup } from "react-bootstrap";
import './dolar.css';
import DolarListItem from "./DolarListItem";

const Dolar = () => {
    //const [dolar, setDolar] = useState({});

    useEffect(() => {
        //consultarAPI();
    }, []);

    const consultarAPI = async () => {
        const token =
            "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTEyMzc1MjMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJHb256YS5zYy5nc0BnbWFpbC5jb20ifQ.c-Amh6RhmL46X9YqHQwfn_l-9NUHbWlZqXdKLmj1NE5hu-yDO_CUo_7iLyF_dmJfK2K_1VOiwlO_9nCyBZkReg";

        const myHeader = {
            Authorization: "BEARER" + token,
        };

        const pedidoAutenticado = {
            method: "GET",
            headers: myHeader,
            mode: "cors",
            cache: "default",
        };

        const response = await fetch(
            "https://api.estadisticasbcra.com",
            pedidoAutenticado
        );
        console.log(response);
    };

    return (
        <div className="d-flex align-items-start ">
            <Card
                className="mx-3 border border-success  shadow-lg"
                style={{ width: "18rem" }}
            >
                <img
                    src={process.env.PUBLIC_URL + "dolar.jpg"}
                    alt="dolar img"
                    className="rounded"
                ></img>
                <Card.Body className="card-img-overlay d-flex flex-column  justify-content-between ">
                    <Card.Title className="text-center">DÓLAR BLUE</Card.Title>
                    <span className="d-flex justify-content-around flex-row mb-auto">
                        <div className="mx-2 text-center ">
                            <div>
                                <h5>Compra</h5>
                            </div>
                            <h3 className="rounded bg-success">$154</h3>
                        </div>
                        <div className="mx-2 text-center">
                            <div>
                                <h5>Venta</h5>
                            </div>
                            <h3 className="rounded bg-success">$160</h3>
                        </div>
                    </span>
                    <div className="text-center mt-3 font-italic">
                        <p className="mb-0 ">actualizado el 30/04/2021</p>
                    </div>
                    <Card.Link href="#">Más info</Card.Link>
                </Card.Body>
            </Card>
            <Card>
                <ListGroup
                    className="border border-success shadow-lg"
                    variant="flush"
                >
                    <DolarListItem />
                    <DolarListItem />
                    <DolarListItem />
                </ListGroup>
            </Card>
        </div>
    );
};

export default Dolar;
