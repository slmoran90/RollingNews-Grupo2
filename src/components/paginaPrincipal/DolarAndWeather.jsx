import React from 'react';
import Dolar from '../APIs/Dolar';
import Weather from '../APIs/Weather';
import './dolarAndWeather.css';
const DolarAndWeather = () => {
    return (
        <div id={'dywdiv'} className='d-flex justify-content-around mx-3 mb-3'>
            <Dolar />
            <Weather />
        </div>
    );
};

export default DolarAndWeather;