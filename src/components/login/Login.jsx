import React, { Fragment, useState } from 'react';
import "./login.css";
import { Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { withRouter, useHistory} from "react-router-dom";
const Login = (props) => {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [datosErroneos, setDatosErroneos] = useState(false);
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

            if (nombre.trim() === "" || password === "") {
                setError(true);
                return;
            } else {
                setError(false);
            }
            const usuarioAdmin = props.usuarios.find(
                (usuario) => usuario.nombre === nombre
            );

            if (typeof usuarioAdmin === 'undefined') {
                setDatosErroneos(true);
                return;
            } else {
                if (usuarioAdmin.password === password) {
                    history.push('/admin')
                    props.setAdminUser(true);

                } else {
                    setDatosErroneos(true);
                }
            }

    };

    return (
        <Fragment >
            <form className="container d-flex margenFondo mb-4 shadow-lg" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6  col-sm-12 my-5">
                        <h1 className="text-center">¡Bienvenido!</h1>
                        <h2 className="text-lead text-center ">Sumate a la comunidad de Rolling News <br /><img src="logo_news.png" alt="logo news" className="foto my-2 mb-2" /></h2>
                        <h4 className="text-lead text-center">Registrarte es gratis.</h4>

                        <img src="modalLogin.png" alt="login" className="w-75 my-4 fotoLogin"></img>
                    </div>
                    <div className="col-md-6  col-sm-12 my-5 p-5">
                        <div className="form-group">
                            <label className="form-label"> <FontAwesomeIcon icon={faUser} className="logoUsuario"></FontAwesomeIcon>Usuario<span className="text-danger">*</span></label>
                            <input type="text" className="form-control outlineColor" placeholder="Ingrese su usuario..." value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className="form-group my-5">
                            <label className="form-label"><FontAwesomeIcon icon={faKey} className="logoUsuario"></FontAwesomeIcon>Contraseña<span className="text-danger">*</span></label>
                            <input type="password" className="form-control outlineColor" placeholder="Ingrese su contraseña..." value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button className="botonGuardar" type="submit">Ingresar</button>
                        <p className="text-center text-muted"><FontAwesomeIcon icon={faShieldAlt} className="logoShield"></FontAwesomeIcon>Datos seguros y protegidos</p>
                        {error ? (
                            <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
                        ) : null}
                        {datosErroneos ? (
                            <Alert variant={"danger"}>
                                El usuario y/o contraseña son incorrectos
                            </Alert>
                        ) : null}
                    </div>
                </div>


            </form>
        </Fragment>
    );
};

export default withRouter(Login);