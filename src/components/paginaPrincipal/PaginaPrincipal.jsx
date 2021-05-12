import React from 'react';
import CoronaVirusInfo from './CoronaVirusInfo';
import DolarAndWeather from './DolarAndWeather';
import NoticiasDestacadas from './NoticiasDestacadas';

const PaginaPrincipal = (props) => {
    return (
        <section>
            <CoronaVirusInfo />
            <NoticiasDestacadas noticias={props.noticiasDestacadas} />
            <DolarAndWeather />
        </section>
    );
};

export default PaginaPrincipal;