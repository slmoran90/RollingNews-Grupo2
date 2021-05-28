const campoRequerido = (valor) =>{
    if(valor.trim() === ''){
        //no paso la validacion
        return false;
    }else{
        return true;
    }
}

export {campoRequerido};