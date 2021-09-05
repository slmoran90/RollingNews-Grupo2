import React, { Fragment, useEffect } from 'react';
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { withRouter, useHistory } from "react-router-dom";
const Admin = (props) => {
    let history = useHistory();
    useEffect(() => {
        if (props.adminUser !== true) {
            history.push("/");
        }
    });

    return (
        <Fragment>
            <div className="container d-flex margenFondo mb-4 shadow-lg">
                <div className="row">
                    <div className="col-md-6 col-sm-12 my-5 ">
                        <h1 className="text-center text-warning">¡Bienvenido Administrador!</h1>
                        <img src="admin.jpg" className="w-100  ml-1 fotoLogin"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 my-5 p-5">
                        <h2 className="text-lead text-center text-danger">Panel de Control<br /></h2>
                        <hr></hr>
                        <p className="text-lead">Utiliza la sección de <b>Admin</b> en el menu de navegación para poder acceder a los diferentes sitios de la plataforma.</p>
                        <p className="text-center my-5"><FontAwesomeIcon icon={faShieldAlt} className="logoShield"></FontAwesomeIcon>Datos seguros y protegidos</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default withRouter(Admin);