import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-secondary text-light text-center pt-3">
      <article className="row d-flex justify-content-around align-items-center">
        <div className="col-sm-6 col-md-3">
          <h6>
            <span className="font-weight-bold">Rolling News</span>
          </h6>
          <div>
            <Link className="text-light">
              <b>Dirección:</b> Calle 123 -<br></br> S.M. de Tucumán - Tucumán
            </Link>
          </div>
          <div>
            <Link className="text-light">
              <b>Teléfono:</b> (381)0303456
            </Link>
          </div>
          <div>
            <Link className="text-light">
              <b>Email:</b> rollingnews@gmail.com
            </Link>
          </div>

        </div>
        <div className="col-sm-6 col-md-3">
          <h6>
            <span className="font-weight-bold">Soporte</span>
          </h6>
          <div>
            <Link className="text-light">
              Centro de Ayuda
            </Link>
          </div>
          <div>
            <Link className="text-light">
              Contacto
            </Link>
          </div>
          <div>
            <Link className="text-light">
              Redacción
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <h6>
            <span className="font-weight-bold">Legales</span>
          </h6>
          <div>
            <Link className="text-light">
              Política de Cookies
            </Link>
          </div>
          <div>
            <Link className="text-light">
              Política de Privacidad
            </Link>
          </div>
          <div>
            <Link className="text-light">
              Términos y Condiciones
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <h6>
            <span className="font-weight-bold">Instala nuestra app</span>
          </h6>
          <Link>
            <img className="w-50 mb-2"
              src="/badge-apple-store.svg"
              alt="logo app store"
              href="#"
            />
          </Link>
          <br></br>
          <Link>
            <img className="w-50"
              href="#"
              src="/google-play-badge-bb.svg"
              alt="logo play store"
            />
          </Link>
        </div>
      </article>
      <hr></hr>
      <article className="row d-flex justify-content-between">
        <div>
          <p>&copy; 2021 Team G2. | Todos los derechos reservados.</p>
        </div>
        <div>
          <Link><FontAwesomeIcon className="text-light" icon={faInstagram} size="lg"></FontAwesomeIcon></Link>
          <Link><FontAwesomeIcon
            className="text-light mx-4"
            icon={faFacebook}
            size="lg"
          ></FontAwesomeIcon></Link>
          <Link><FontAwesomeIcon className="text-light" icon={faTwitter} size="lg"></FontAwesomeIcon></Link>
          <Link><FontAwesomeIcon
            className="text-light ml-4 mr-5"
            icon={faYoutube}
            size="lg"
          ></FontAwesomeIcon></Link>
        </div>
      </article>
    </section>
  );
};

export default Footer;
