import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import { useState, useEffect } from "react";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import NuevaCategoria from './components/categorias/NuevaCategoria';
import ListarCategoria from './components/categorias/ListarCategoria';
import ListarNoticiasxCateg from './components/noticias/ListarNoticiasxCateg';
import NoticiaCompleta from './components/noticias/NoticiaCompleta';
import Error404 from "./components/Error404";
import Swal from 'sweetalert2'


function App() {
    // URL donde estan guardadas las categorias
    const URL = process.env.REACT_APP_API_URL;

    // state para get de categorias y ejecutar solo en montaje
    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        consultarAPI();
    }, []);

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
            Swal.fire(
                'Ocurrió un Error!',
                'Inténtelo en unos minutos.',
                'error'
            )
        }
    };
    return (
        <Router>
            <Navegacion></Navegacion>
            {/* Navegacion */}
            {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
            <Switch>
                <Route exact path="/">
                    {/*  <PaginaPrincipal /> */}
                </Route>
                <Route>
                    {/* <Categorias /> */}
                </Route>
                <Route>
                    {/*  <AcercaDeNosotros /> */}
                </Route>
                <Route>
                    {/* <Contacto /> */}
                </Route>
                <Route exact path="/categorias/nueva">
                    <NuevaCategoria consultarAPI={consultarAPI}></NuevaCategoria>
                </Route>
                <Route exact path="/categorias/listar">
                    <ListarCategoria
                        categorias={categorias}
                        consultarAPI={consultarAPI}
                    ></ListarCategoria>
                </Route>
                <Route exact path="/noticias/listar/:nombreCategoria">
                    {/* muestra noticias por categoria */}
                    <ListarNoticiasxCateg consultarAPI={consultarAPI}></ListarNoticiasxCateg>
                </Route>
                {/* paso parametro id de la noticia que quiero mostrar completa */}
                <Route exact path="/noticias/noticiaCompleta/:id">
                    <NoticiaCompleta></NoticiaCompleta>
                </Route>
                <Route path="*">
                    <Error404></Error404>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

