import React, { Fragment } from "react";
import CardSus from './CardSus'
const PromoSus = () => {
  return (
    <Fragment>
      <h1 className="text-center">Promociones</h1>
      <hr />
      <CardSus></CardSus>
      <hr/>
      <h4>*Puedes editar las noticias, siempre con el permiso del periodista dueño de la misma</h4>
      <h4>*Tarjeta Premium: puedes tener descuentos en varios negocios asociados a nuestra firma (Carnicerias Roll, Supermercado CodeR y FarmaciasBackEnd</h4>
    </Fragment>
  );
};
export default PromoSus;