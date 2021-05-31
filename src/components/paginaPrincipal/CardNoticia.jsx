import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cardsNoticias.css';

const CardNoticia = (props) => {
    

    return (
        
        <Card className='my-3' style={{ width: `${props.width}`}}>
            <div className='wrapper example-1' style={{ background: `url(${props.noticia && props.noticia.imagenPrincipal}) 20% 1% / cover no-repeat`}}>
                <div className='date'>
                    <span className='day'>12</span>
                    <span className='month'>Aug</span>
                    <span className="year">2016</span>
                </div>
                <div className="data">
                    <div className="content">
                        <span className="author">{props.noticia.autorNoticia}</span>
                        <p className="title h1card"><Link to={'/noticia/'+props.noticia.categoria+'/'+props.noticia.id}>{props.noticia && props.noticia.tituloNoticia}</Link></p>
                        <p className="text clamp-line-3">{props.noticia && props.noticia.noticiaBreve}</p>
                    </div>
                    
                        
                </div>
            </div>

        </Card>
        
    );
};

export default CardNoticia;



            