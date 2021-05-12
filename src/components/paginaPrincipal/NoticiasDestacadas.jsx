import React from 'react';
import CardNoticia from './CardNoticia';

const NoticiasDestacadas = () => {
    return (
        <div className='container-fluid d-flex w-75 p-5 justify-content-around'>
            <CardNoticia width={'30rem'}/>
            <div className='d-flex flex-column'>
            <CardNoticia width={'18rem'}/>
            <CardNoticia width={'18rem'}/>
            </div>
        </div>
    );
};

export default NoticiasDestacadas;