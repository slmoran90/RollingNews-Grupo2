import React from 'react';
import CoronaVirusInfo from './CoronaVirusInfo';
import NoticiasDestacadas from './NoticiasDestacadas';

const PaginaPrincipal = () => {
    return (
        <section>
            <CoronaVirusInfo />
            <NoticiasDestacadas />
        </section>
    );
};

export default PaginaPrincipal;