import React, { useEffect, useState } from "react";

import "./weather.css";
const Weather = () => {
  const [weatherApi, setWeatherApi] = useState({});
  useEffect(() => {
    consultarApiClima();
  }, []);

  const consultarApiClima = async () => {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?&id=3833578&appid=d69142f6fdc12970e9278747e7d64051&units=metric&lang=es`
    );

    try {
      if (resp.status === 200) {
        const resultado = await resp.json();
        setWeatherApi(resultado);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const city = weatherApi.name && weatherApi.name.split(" ");
  const cityName = city && city[0];

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
        <img
          className="city-icon"
          src={`https://openweathermap.org/img/wn/${
            weatherApi.weather && weatherApi.weather[0].icon
          }@2x.png`}
          alt={weatherApi.weather && weatherApi.weather[0].description}
        />
        <p className="pWeather">
          {weatherApi.weather && weatherApi.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default Weather;
