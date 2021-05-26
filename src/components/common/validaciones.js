const campoRequerido = (valor) =>{
    if(valor.trim() === ''){
        //no paso la validacion
        return false;
    }else{
        return true;
    }
}

// function validarFormatoFecha(valor) {
//     var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
//     if ((valor.match(RegExPattern)) && (valor!='')) {
//           return true;
//     } else {
//           return false;
//     }
// }


// const validarURL = (valor) =>{
    
// }


export {campoRequerido};