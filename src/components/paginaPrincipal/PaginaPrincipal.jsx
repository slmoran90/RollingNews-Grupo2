import React from 'react';
import CoronaVirusInfo from './CoronaVirusInfo';
import DolarAndWeather from './DolarAndWeather';
import NoticiasDestacadas from './NoticiasDestacadas';
import SeccionCatPrincipal from './SeccionCatPrincipal';

const PaginaPrincipal = (props) => {
    
    return (
        <section className='margenSup'>
            <NoticiasDestacadas noticias={props.noticiasDestacadas} />
            <CoronaVirusInfo />
            <DolarAndWeather />
            {props.economia && <SeccionCatPrincipal titulo={'Titulo'} categoria={props.economia}/>}
            {props.deportes && <SeccionCatPrincipal categoria={props.deportes} />}
            {props.actualidad && <SeccionCatPrincipal categoria={props.actualidad} />}
        </section>
    );
};

export default PaginaPrincipal;