import React, { useEffect, useState } from "react";
import "./dolar.css";
import DolarListItem from "./DolarListItem";

const Dolar = () => {
    const [dolar, setDolar] = useState({});
    const [date, setDate] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
        var answer = await response.json();

        var fechaAPI = answer.last_update.split("T");
        setDate(fechaAPI[0].split("-"));

        setDolar({ ...answer });
    };

    return (
        <div className=" d-flex flex-wrap justify-content-around dolar-row ">
            <div className='m-3'>
                <DolarListItem moneda={dolar.blue} nombre={"Dólar Blue"} />
            </div>
            <div className='m-3'>
                <DolarListItem
                    moneda={dolar.oficial}
                    nombre={"Dólar oficial"}
                />
            </div>
            <div className='m-3'>
                <DolarListItem moneda={dolar.blue_euro} nombre={"Euro Blue"} />
            </div>
            <div className='m-3'>
                <DolarListItem
                    moneda={dolar.oficial_euro}
                    nombre={"Euro oficial"}
                />
            </div>
        </div>
    );
};

export default Dolar;
