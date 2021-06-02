const campoReq = (nombreCompleto) =>{
    if(nombreCompleto.trim() !== '' && nombreCompleto.length>6){
        //no paso la validacion
        //console.log("nombre")
        return true;
    }else{
        return false;
    }
};
const campoRequerido = (valor) =>{
    if(valor.trim() === ''){
        //no paso la validacion
        return false;
    }else{
        return true;
    }
}
const validarEmail= (email) => {
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && expresion.test(email)) {
        return true;
    } else {
        //console.log("email")
        return false;
    }
};
const validarTextArea = (textArea) =>{
    //console.log(textArea)
    //const expresion = /^[a-zA-ZÀ-ÿ\s]{10,250}$/;
    if(textArea.trim() !== '' && textArea.length >=10){
        //no paso la validacion
        //console.log("textarea del if")
        return true;
    }else{
        return false;
    }
};
const validarConsulta = (tipoConsulta) =>{
    if(tipoConsulta!== ''){
        return true
    }else{
        return false
    }
};
const validarNumeros=(numeros)=> {
    let expresionNum = /[0-9]{4,10}$/;
    if (numeros.trim() !== '' && expresionNum.test(numeros)) {
        return true;
    } else {
        return false;
    }
};
export {campoRequerido, validarEmail, validarTextArea, validarConsulta, validarNumeros, campoReq};