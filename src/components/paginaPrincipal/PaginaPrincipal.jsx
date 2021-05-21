import React from 'react';
import CoronaVirusInfo from './CoronaVirusInfo';
import DolarAndWeather from './DolarAndWeather';
import NoticiasDestacadas from './NoticiasDestacadas';
import SeccionCatPrincipal from './SeccionCatPrincipal';

const PaginaPrincipal = (props) => {
    
    return (
        <section>
            <CoronaVirusInfo />
            <NoticiasDestacadas noticias={props.noticiasDestacadas} />
            <DolarAndWeather />
            {props.economia && <SeccionCatPrincipal titulo={'Titulo'} categoria={props.economia}/>}
            {props.deportes && <SeccionCatPrincipal categoria={props.deportes} />}
        </section>
    );
};

export default PaginaPrincipal;