import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginaPrincipal from "./components/paginaPrincipal/PaginaPrincipal";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    // const URLjsonServerNoticias = process.env.NOTICIAS_URL;

    const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
    const [noticiasEco, setNoticiasEco] = useState([]);
    const [noticiasDeportes, setNoticiasDeportes] = useState([]);
    useEffect(() => {
        cargarNoticias();
    }, []);

    const cargarNoticias = async () => {
        try {
            const respuesta = await fetch("http://localhost:3004/noticias");

            if (respuesta.status === 200) {
                const noticias = await respuesta.json();
                const arrayDestacadas = noticias.filter(
                    (noticia) => noticia.destacada === "true"
                );
                const array3UltimosDestacados = arrayDestacadas.splice(
                    arrayDestacadas.length - 3
                );
                setNoticiasDestacadas(array3UltimosDestacados);
                const arrayEco = noticias.filter(
                    (noticia) => noticia.categoria === "Economía"
                );
                if (arrayEco.length > 6) {
                    const arrayEcoSplice = arrayEco.splice(arrayEco.length - 6);
                    setNoticiasEco(arrayEcoSplice);
                } else {
                    setNoticiasEco(arrayEco);
                }
                const arrayDeportes = noticias.filter(
                    (noticia) => noticia.categoria === "Deportes"
                );
                if (arrayDeportes.length > 6) {
                    const arrayDepSplice = arrayDeportes.splice(
                        arrayDeportes.length - 6
                    );
                    setNoticiasDeportes(arrayDepSplice);
                } else {
                    setNoticiasDeportes(arrayDeportes);
                }
            }
        } catch (error) {
            console.log(error, "este es un error");
        }
    };

    return (
        <Router>
            <Navegacion></Navegacion>
            {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
            <Switch>
                <Route exact path="/">
                    <PaginaPrincipal
                        noticiasDestacadas={noticiasDestacadas}
                        economia={noticiasEco}
                        deportes={noticiasDeportes}
                    />
                </Route>
                <Route>{/* <Categorias /> */}</Route>
                <Route>{/*  <AcercaDeNosotros /> */}</Route>
                <Route>{/* <Contacto /> */}</Route>
                <Route exact path="/categorias/nueva">
                    {/*  <NuevaCategoria
                        consultarAPI={consultarAPI}
                    ></NuevaCategoria> */}
                </Route>
                <Route exact path="/categorias/listar">
                    {/* <ListarCategoria
                        categorias={categorias}
                        consultarAPI={consultarAPI}
                    ></ListarCategoria> */}
                </Route>
                {/* paso como parametro la Categoria. Se pone ? al final si quiero que no sea olbigatorio */}
                <Route exact path="/noticias/listar/:nombreCategoria">
                    {/* muestra noticias por categoria */}
                    {/* <ListarNoticiasxCateg
                        consultarAPI={consultarAPI}
                    ></ListarNoticiasxCateg> */}
                </Route>
                <Route exact path="/noticias/noticiaCompleta">
                    {/* <NoticiaCompleta></NoticiaCompleta> */}
                </Route>
                <Route path="*">{/* <Error404></Error404> */}</Route>
            </Switch>
            <Footer></Footer>
        </Router>
    );
}

export default App;
