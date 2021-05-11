import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Inicio from "./components/Inicio";
import ListarCategoria from "./components/categorias/ListarCategoria";
import ListarNoticiasxCateg from "./components/noticias/ListarNoticiasxCateg";
import NoticiaCompleta from "./components/noticias/NoticiaCompleta";
import Error404 from "./components/Error404";
import Swal from "sweetalert2";
import NavAdmin from "./components/common/NavAdmin";
import NuevaCategoria from "./components/categorias/NuevaCategoria";

function App() {
    // URL donde estan guardadas las categorias
    const URL = process.env.REACT_APP_API_URL;

    // state para get de categorias y ejecutar solo en montaje
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);

    // solicitud GET de Categorias
    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            console.log(respuesta);
            if (respuesta.status === 200) {
                const listaCategorias = await respuesta.json();
                setCategorias(listaCategorias);
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
        }
    };
    return (
        <Router>
            {/*  <Navegacion /> */}
            {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
            <NavAdmin></NavAdmin>
            <Switch>
                <Route exact path="/categorias/nueva">
                    <NuevaCategoria consultarAPI={consultarAPI}></NuevaCategoria>
                </Route> 
                <Route exact path="/categorias/listar">
                    <ListarCategoria
                        categorias={categorias}
                        consultarAPI={consultarAPI}
                    ></ListarCategoria>
                </Route>
                {/* paso como parametro la Categoria. Se pone ? al final si quiero que no sea olbigatorio */}
                <Route exact path="/noticias/listar/:nombreCategoria">
                    {/* muestra noticias por categoria */}
                    <ListarNoticiasxCateg
                        consultarAPI={consultarAPI}
                    ></ListarNoticiasxCateg>
                </Route>
                {/* paso parametro id de la noticia que quiero mostrar completa */}
                <Route exact path="/noticias/noticiaCompleta/:id">
                    <NoticiaCompleta></NoticiaCompleta>
                </Route>
                <Route path="*">
                    <Error404></Error404>
                </Route>
            </Switch>
             {/* <Footer /> */}
        </Router>
    );
}

export default App;
