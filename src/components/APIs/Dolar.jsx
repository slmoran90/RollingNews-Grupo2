import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./dolar.css";
import DolarListItem from "./DolarListItem";

const Dolar = () => {
    const [dolar, setDolar] = useState({});
    var count = 0;

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
        var answer = await response.json();
        console.log(answer, "answer");
        setDolar({ ...answer });
        console.log(dolar, "dolar");
        /* setTimeout(() => {

        }, 1000); */
        /* do {
            setDolar({ ...answer });
            console.log(dolar, "dolar");
            count = count + 1;
            console.log(count, "count");
        } while (count <= 1);  */
    };

    return (
        <div className="d-flex p-auto ">
            <Card className="mx-3   dolar" style={{ width: "18rem" }}>
                <img
                    src={process.env.PUBLIC_URL + "dolar.jpg"}
                    alt="dolar img"
                    className="dolar-img"
                ></img>
                <Card.Body className="card-img-overlay d-flex flex-column  justify-content-between ">
                    <Card.Title className="text-center">DÓLAR BLUE</Card.Title>
                    <span className="d-flex justify-content-around flex-row mb-auto">
                        <div className="mx-2 text-center ">
                            <div>
                                <h5>Compra</h5>
                            </div>
                            <h3 className="rounded bg-success">
                                ${dolar.blue && dolar.blue.value_buy}
                            </h3>
                        </div>
                        <div className="mx-2 text-center">
                            <div>
                                <h5>Venta</h5>
                            </div>
                            <h3 className="rounded bg-success">
                                ${dolar.blue && dolar.blue.value_sell}
                            </h3>
                        </div>
                    </span>
                    <div className="text-center mt-3 font-italic">
                        <p className="mb-0 ">actualizado el 30/04/2021</p>
                    </div>
                    <Card.Link href="#">Más info</Card.Link>
                </Card.Body>
            </Card>

            <div className=" d-flex flex-column justify-content-between dolar-list shadow-lg">
                <DolarListItem
                    moneda={dolar.oficial}
                    nombre={"Dólar oficial"}
                />
                <DolarListItem moneda={dolar.blue_euro} nombre={"Euro Blue"} />
                <DolarListItem moneda={dolar.oficial_euro}  nombre=
                {"Euro oficial"} />

            </div>
        </div>
    );
};

export default Dolar;
