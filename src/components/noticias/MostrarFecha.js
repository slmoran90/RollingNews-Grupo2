import React, { useState } from 'react';

const MostrarFecha = () => {

    const [fechaLocal,setFechaLocal] = useState('')
    
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 10) {
        console.log(`${day}-0${month}-${year}`)
        setFechaLocal(`${day}-0${month}-${year}`)
    } else {
        console.log(`${day}-${month}-${year}`)
        setFechaLocal(`${day}-0${month}-${year}`)
    }
    return (
        <div>
            <h1>Fecha actual es:{fechaLocal}</h1>
        </div>
    );
};

export default MostrarFecha;