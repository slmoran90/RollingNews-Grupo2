import React from "react";
import { Row, Container } from "react-bootstrap";
import "./nosotros.css";

const Nosotros = () => {
    return (
        <div id="main-div">
            <Container>
                <Row className="justify-content-md-center mb-5">
                    <div className="row justify-content-center my-5">
                        <h1 className="col-sm-12 col-md-6 text-light display-4" id="h2">
                            Hacemos Periodismo</h1>
                        <br></br>
                        <b className="ml-2 text-light text-center">
                            El diario que supo ganarse la confianza de sus lectores
                            durante más de tres décadas por la <br></br>seriedad de sus investigaciones,
                            su edición de vanguardia y el prestigio de sus columnistas.
                        </b>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="col-sm-12 col-md-5 d-flex justify-content-end">
                            <h2 id="caja" className="d-flex align-items-end">
                                <p className="ml-2 text-light">
                                    El<br></br> <b>Equipo</b>
                                </p>
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-5 font-weight-bold text-light align-self-center ml-4">
                        Creemos que nuestro equipo,es una gran familia. Creemos que la confianza se construye a través de la excelencia. Contribuimos a construir un futuro en el que todos tengan la ayuda que necesitan para dedicar tiempo a las personas y las cosas que más importan.
                        </div>
                    </div>
                    <div >
                        <div className="row my-4">
                            <div className="row col-sm-12 col-md-4">
                                <div className="col-md-5 mr-4">
                                    <img src="/sergio.svg" className="w-100" alt="Sergio"></img>
                                </div>
                                <div className="col-md-5 text-light">
                                    <h6>Sergio Moran</h6>
                                    <div className="linea"></div>
                                    <p className="mt-2">Socio Fundador</p>
                                </div>                                
                            </div>
                            <div className="row col-sm-12 col-md-4">
                                <div className="col-md-5 mr-4"> 
                                    <img src="/valen.svg" className="w-100" alt="Valentina"></img>
                                </div>
                                <div className="col-md-5 text-light">
                                    <h6>Valentina Iramain</h6>
                                    <div className="linea"></div>
                                    <p className="mt-2">Socio Fundador</p>
                                </div>
                            </div>
                            <div className="row col-sm-12 col-md-4">
                                <div className="col-md-5 mr-4">
                                    <img src="/gonza.svg" className="w-100" alt="Gonzalo"></img>
                                </div>
                                <div className="col-md-5 text-light">
                                    <h6>Gonzalo Scarlata</h6>
                                    <div className="linea"></div>
                                    <p className="mt-2">Socio Fundador</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row col-sm-12 col-md-4">
                                <div className="col-md-5 mr-4">
                                    <img src="/sebas.svg" className="w-100" alt="Sebastian"></img>
                                </div>
                                <div className="col-md-5 text-light">
                                    <h6>Sebastian Mosquera</h6>
                                    <div className="linea"></div>
                                    <p className="mt-2">CEO</p>
                                </div>
                            </div>
                            <div className="row col-sm-12 col-md-4">
                                <div className="col-md-5 mr-4">
                                    <img src="/clau.svg" className="w-100" alt="Claudia"></img>
                                </div>
                                <div className="col-md-5 text-light">
                                    <h6>Claudia D'Amichici</h6>
                                    <div className="linea"></div>
                                    <p className="mt-2">Dirección de proyectos</p>
                                </div>
                            </div>
                            <div className="row col-sm-12 col-md-4">
                                <div className="col-md-5 mr-4">
                                    <img src="/slaya.svg" className="w-100" alt="Slaya"></img>
                                </div>
                                <div className="col-md-5 text-light">
                                    <h6>Slaya Ostapzuk</h6>
                                <div className="linea"></div>                                     
                                    <p className="mt-2">Dirección de programación</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

                {/* linea de tiempo color */}
                <div className="container mt-5">
                    <h1 id="h2" className="text-light justify-content-center my-5"><span>Nuestra historia</span></h1>
                    <div className="row" responsive="md">
                        <div className="col-md-12">
                            <div className="main-timeline4">
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">2018</span>
                                        <div className="inner-content">
                                            <h3 className="title">Argentina</h3>
                                            <p className="description">
                                                En diciembre de 2018 el canal anunció nueva programación
                                                producida desde Buenos Aires, Argentina, sumando a su equipo a
                                                los periodistas Marcelo Longobardi, Jonatan Viale y Jessica
                Bossi.                                    </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">2017</span>
                                        <div className="inner-content">
                                            <h3 className="title">Antártida</h3>
                                            <p className="description">
                                                El 2 de marzo de 2017, el canal transmitió en vivo por primera
                                                vez desde la Antártida, con el reportero Darío Klein en la base
                                                Artigas de Uruguay.
                                    </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year"> 2013</span>
                                        <div className="inner-content">
                                            <h3 className="title">Rolling News Latino</h3>
                                            <p className="description">
                                                El 28 de enero de 2013, el canal lanzó Rolling News Latino, un
                                                nuevo bloque de programación en español hecho para el mercado
                                                hispano de Estados Unidos. Esto fue anunciado el 3 de diciembre
                                                de 2012 por la vicepresidenta ejecutiva del canal Cynthia
                                                Hudson. </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">2012</span>
                                        <div className="inner-content">
                                            <h3 className="title">15 años</h3>
                                            <p className="description">
                                                En marzo de 2012, el canal celebró sus 15 años al aire con un
                                                especial de 15 noticias que fueron cubiertas por los
                                                presentadores de la cadena informativa.18​ También se lanzó un
                                                sitio: Rolling Newse15.com
                                    </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">2010</span>
                                        <div className="inner-content">
                                            <h3 className="title">web de Rolling
                News México</h3>
                                            <p className="description">
                                                En 2010, Rolling News en Español lanzó la página web de Rolling
                                                News México en conjunto con el Grupo Expansión de México.El 22
                                                de noviembre de 2010, el canal «evolucionó» con un nuevo logo en
                                                la pantalla y su lema «Vive la noticia», además incorporó ocho
                                                presentadores e inició diez nuevos programas, como así también
                nuevos estudios en Miami y nuevos reporteros en Estados Unidos.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">2007</span>
                                        <div className="inner-content">
                                            <h3 className="title">10 años</h3>
                                            <p className="description">
                                                Para conmemorar los primeros 10 años del canal, en el 2007 se
                                                puso en marcha una gran campaña publicitaria, que incluyó desde
                                                un cambio de logo temporal, hasta la salida al aire de spots
                                                publicitarios y comerciales con los sucesos más importantes que
                                                el canal había cubierto en la década. A esto se le sumó la
                                                creación de un sitio web (Rolling Newse10.com, actualmente no
                                                disponible) para la conmemoración de este evento y el
                lanzamiento de un libro recopilatorio.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">2003</span>
                                        <div className="inner-content">
                                            <h3 className="title">Premio INTE</h3>
                                            <p className="description">
                                                En 2003, Rolling News en Español recibe el premio INTE por ser
                                                el «mejor canal de noticias de televisión paga del año».En 2003,
                                                Rolling News en Español recibe el premio INTE por ser el «mejor
                canal de noticias de televisión paga del año».</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">1992</span>
                                        <div className="inner-content">
                                            <h3 className="title">Rolling News Internacional</h3>
                                            <p className="description">
                                                En 1992, en Rolling News International comienza el Noticiero
                                                Rolling News Internacional, el primero en español de ese canal.
                                                Otros programas en español fueron Las Noticias y Noticias
                                                México, todos ellos presentados por la colombiana Patricia
                                                Janiot y el uruguayo Jorge Gestoso, y con la dirección de
                                                Rolando Santos.7​6​ Al año siguiente se lanza Rolling News Radio
                en Español.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="timeline">
                                    <a href="#" className="timeline-content text-decoration-none">
                                        <span className="year">1988</span>
                                        <div className="inner-content">
                                            <h3 className="title">Rolling News en español</h3>
                                            <p className="description">
                                                En 1988, Rolling News empieza a producir noticias en español con
                                                el Noticiero Rolling News, destinado al público de habla hispana
                de los Estados Unidos y América Latina.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Nosotros;
