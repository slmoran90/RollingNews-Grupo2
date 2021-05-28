import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ListaPorCategoriaUser = () => {
    const { categoria } = useParams();
    const [listaDeNoticias, setListaDeNoticias] = useState([]);

    const UrlListaNoticias = `${process.env.REACT_APP_API_URLnoticias}/?categoria=${categoria}`;

    useEffect(() => {
        traerListaDeCategoria();
    }, [])

    const traerListaDeCategoria = async () => {
        try {
            const resp = await fetch(UrlListaNoticias);
            console.log("🚀 ~ file: ListaPorCategoriaUser.jsx ~ line 17 ~ traerListaDeCategoria ~ resp", resp)
            if (resp.status === 200) {
                const lista = await resp.json();
                console.log("🚀 ~ file: ListaPorCategoriaUser.jsx ~ line 20 ~ traerListaDeCategoria ~ lista", lista)
                setListaDeNoticias(lista);
                console.log(listaDeNoticias);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>

        </div>
    );
};

export default ListaPorCategoriaUser;