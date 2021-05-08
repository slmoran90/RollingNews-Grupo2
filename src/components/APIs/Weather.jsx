import React, { useState } from "react";

import "./weather.css";
const Weather = () => {
    const [coordenadas, setCoordenadas] = useState({});
    const weather = {
        name: "Yerba Buena",
        main: {
            temp: 22,
        },
        sys: {
            country: "Argentina",
        },
    };
    var geoOptions = {
        enableHighAccuracy: true,
        timeout: 1,
        maximumAge: 0,
    };

    const geoSuccess = (position) => {
        setCoordenadas({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
        console.log(position);
        return;
    };

    const geoError = (error) => {
        alert("Hubo un error", error.code);
    };

    

    const consultaAPI = async () => {
        
        
        //navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions); 
        
        const consulta1 = await fetch(
            "http://api.openweathermap.org/data/2.5/weather?lat=-26.808539&lon=-65.28562649999999&appid=d69142f6fdc12970e9278747e7d64051&units=metric"
        );
        /* console.log(coordenadas);
        const consulta2 = await fetch(
            `api.openweathermap.org/data/2.5/weather?lat=${coordenadas.latitude}&lon=${coordenadas.longitude}&appid=d69142f6fdc12970e9278747e7d64051&units=metric`
        ); */
        /* console.log(" consulta", consulta1); */
        console.log(" consulta2", consulta1);

        if (consulta1.status === 200) {
            try {
                const respuesta = await consulta1.json();
                console.log(
                    "🚀 ~ file: Weather.jsx ~ line 49 ~ consultaAPI ~ respuesta",
                    respuesta
                );
            } catch (error) {
                console.log(error);
            }
        }
    };
    consultaAPI();
   

    return (
        <div className="city">
            <h2 className="city-name">
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
            </div>
            <div className="info">
                {/* <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p> */}
            </div>
        </div>
    );
};

export default Weather;
