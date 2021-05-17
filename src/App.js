import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navegacion from "./components/common/Navegacion";
//import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Suscripcion from "./components/Suscripcion";

function App() {
  return (
    <Router>
      <Navegacion> </Navegacion> {/* Navegacion */}{" "}
      {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}{" "}
      <Suscripcion></Suscripcion>
      <Switch>
        <Route exact path="/">
          {" "}
          {/*  <PaginaPrincipal /> */}{" "}
        </Route>{" "}
        <Route> {/* <Categorias /> */} </Route>{" "}
        <Route> {/*  <AcercaDeNosotros /> */} </Route>{" "}
        <Route> {/* <Contacto /> */} </Route>{" "}
        <Route exact path="/categorias/nueva">
          {" "}
          {/*  <NuevaCategoria
                                    consultarAPI={consultarAPI}
                                ></NuevaCategoria> */}{" "}
        </Route>{" "}
        <Route exact path="/categorias/listar">
          {" "}
          {/* <ListarCategoria
                                    categorias={categorias}
                                    consultarAPI={consultarAPI}
                                ></ListarCategoria> */}{" "}
        </Route>{" "}
        {/* paso como parametro la Categoria. Se pone ? al final si quiero que no sea olbigatorio */}{" "}
        <Route exact path="/noticias/listar/:nombreCategoria">
          {" "}
          {/* muestra noticias por categoria */}{" "}
          {/* <ListarNoticiasxCateg
                                    consultarAPI={consultarAPI}
                                ></ListarNoticiasxCateg> */}{" "}
        </Route>{" "}
        <Route exact path="/noticias/noticiaCompleta">
          {" "}
          {/* <NoticiaCompleta></NoticiaCompleta> */}{" "}
        </Route>{" "}
        <Route path="*"> {/* <Error404></Error404> */} </Route>{" "}
      </Switch>{" "}
      {/* <Footer></Footer> */}{" "}
    </Router>
  );
}

export default App;
