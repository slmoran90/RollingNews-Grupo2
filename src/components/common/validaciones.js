// const campoReq = (nombreCompleto) => {
//   if (nombreCompleto.trim() !== "" && nombreCompleto.length > 6 && isNaN) {
//     return true;
//   } else {
//     return false;
//   }
// };

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
  if (tipoConsulta !== "") {
    return true;
  } else {
    return false;
  }
};

const validarNumeros = (numeros) => {
    let expresionNum = /[0-9]{10}$/;
    if (numeros.trim() !== '' && expresionNum.test(numeros)) {
        return true;
    } else {
        return false;
    }
};

//Validacion de suscripcion
const campoReq = (nombreCompleto) => {
    if (nombreCompleto.trim() !== "" && nombreCompleto.length > 6 && isNaN) {
        return true;
    } else {
        return false;
    }
};

const validarCodPostal = (codArea) => {
    let expresionNum = /[0-9]{3,4}$/;
    if (codArea.trim() !== "" && expresionNum.test(codArea)) {
        return true;
    } else {
        return false;
    }
};

const validarContraseña = (contraseña) => {
    if (
        contraseña.trim() !== "" &&
        contraseña.length > 7 &&
        contraseña.length < 13
    ) {
        return true;
    } else {
        return false;
    }
};

export { campoRequerido, validarEmail, validarTextArea, validarConsulta, validarNumeros, campoReq,validarCodPostal,validarContraseña };
