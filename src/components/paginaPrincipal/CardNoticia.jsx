import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cardsNoticias.css';

const CardNoticia = (props) => {
    const [fechaCard, setfechaCard] = useState(props.noticia.fechaNoticia);
    const fechaDate = fechaCard.split('-');
    console.log("🚀 ~ file: CardNoticia.jsx ~ line 9 ~ CardNoticia ~ fechaDate", fechaDate)
    const fecha = new Date(fechaDate[0],fechaDate[1],fechaDate[2]);
    console.log(fecha)
    
    const fechaSplit = fecha.toString().split(' ');   
    
    useEffect(() => {
            
        }, [])

        //const imgCard = `url(${props.noticia.imagenPrincipal})`;

    return (
        
        <Card className='my-3 noticia' style={{ width: `${props.width}`}}>
            <div className='wrapper example-1' style={{ 'background': `url(${props.noticia && props.noticia.imagenPrincipal}) 20% 1% / cover no-repeat`}}>
                <div className='date'>
                    <span className='day'>{fechaSplit[2]}</span>
                    <span className='month'>{fechaSplit[1]}</span>
                    <span className="year">{fechaSplit[3]}</span>
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



            