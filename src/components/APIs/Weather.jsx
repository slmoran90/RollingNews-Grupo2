import React, { useEffect, useState } from "react";
import Axios from 'axios';

import "./weather.css";
const Weather = () => {
    /* const [coordenadas, setCoordenadas] = useState({});
    const [userIP, setUserIP] = useState("");
    const [mainTemp, setMainTemp] = useState({}); */
    const [weatherApi, setWeatherApi] = useState({});
    const city = weatherApi.name.split(' ');
    const cityName = city[0];
    useEffect(() => {
        consultarApiClima();
    }, [])
        

    const consultarApiClima = async () => {
        // este comentario está para seguir desarrollando un widget de clima geolocalizado, donde se necesita un servidor https
        /* const consultaAPIIP = await fetch('https://api.ipify.org?format=json');
        const respuestaIP = await consultaAPIIP.json();
        setUserIP(`${respuestaIP.ip}`);

        const consultaAPIGeo = await fetch(`https://api.ipgeolocationapi.com/geolocate/186.158.177.87`);
        //const respuestaGeo = await consultaAPIGeo.json();

        console.log(consultaAPIGeo, 'geo'); */
        /* const tucumanCoordenadas = {
            id: 3833578,
            name: "Tucumán Province",
            state: "",
            country: "AR",
            coord: { lon: -65.5, lat: -27.0 },
        };
        const apiKeyOW = 'd69142f6fdc12970e9278747e7d64051'; */
        
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?&id=3833578&appid=d69142f6fdc12970e9278747e7d64051&units=metric`);
        console.log(resp, 'resp');

        try {
            if(resp.status === 200){
                const resultado = await resp.json();
                setWeatherApi(resultado);
            };
        } catch (error) {
          console.log(error);
        }
        };

    

    return (
        <div className="city">
            <h2 className="city-name">
                <span>{weatherApi && cityName}</span>
                <sup>{weatherApi.sys && weatherApi.sys.country}</sup>
            </h2>
            <div className="city-temp">
                {Math.round(weatherApi.main && weatherApi.main.temp)}
                <sup>&deg;C</sup>
            </div>
            <div className="info">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weatherApi.weather && weatherApi.weather[0].icon}@2x.png`} alt={weatherApi.weather && weatherApi.weather[0].description} />
                <p>{weatherApi.weather && weatherApi.weather[0].description}</p>
            </div>
        </div>
    );
};

export default Weather;
