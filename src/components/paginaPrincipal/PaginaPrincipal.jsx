import React from 'react';
import CoronaVirusInfo from './CoronaVirusInfo';
import DolarAndWeather from './DolarAndWeather';
import NoticiasDestacadas from './NoticiasDestacadas';

const PaginaPrincipal = () => {
    return (
        <section>
            <CoronaVirusInfo />
            <NoticiasDestacadas />
            <DolarAndWeather />
        </section>
    );
};

export default PaginaPrincipal;