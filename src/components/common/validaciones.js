
const campoRequerido = (valor) => {
    if (valor.trim() === '') {
        
        return false;
    } else {
        return true;
    }
};

const validarEmail = (email) => {
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && expresion.test(email)) {
        return true;
    } else {
        
        return false;
    }
};

const validarTextArea = (textArea) => {
    
    if (textArea.trim() !== '' && textArea.length >= 10) {
        
        return true;
    } else {
        return false;
    }
};

const validarConsulta = (tipoConsulta) => {
    if (tipoConsulta !== '') {
        return true
    } else {
        return false
    }
};

const validarNumeros = (numeros) => {
    let expresionNum = /[0-9]{4,10}$/;
    if (numeros.trim() !== '' && expresionNum.test(numeros)) {
        return true;
    } else {
        return false;
    }
};

export { campoRequerido, validarEmail, validarTextArea, validarConsulta, validarNumeros };