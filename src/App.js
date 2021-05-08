import { Route, Router, Switch } from "react-router";
import "./App.css";
import PaginaAdmin from "./components/PaginaAdmin";

function App() {
    return (
        <Router>
            {/*  <Navegacion /> */}
            {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
            <Switch>
                <Route exact path="/">
                    {/*  <PaginaPrincipal /> */}
                </Route>
                
                {/* Elegir entre las rutas. La barra / es la pagina principal del proyecto (idem index.hml) */}
                <Route exact path="/administracion">
                    {/* llamar al componente inicio de administración*/}
                    <PaginaAdmin />
                </Route>
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
            {/*  <Footer /> */}
        </Router>
    );
}

export default App;
