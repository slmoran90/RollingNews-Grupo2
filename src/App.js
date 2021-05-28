import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navegacion from "./components/common/Navegacion";
//import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./components/Contacto";


function App() {
  return (
    <Router>
      <Navegacion> </Navegacion> {/* Navegacion */}
      {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
      <Switch>
        <Route exact path="/">
          {/*  <PaginaPrincipal /> */}
        </Route>
        <Route exact path="/contacto">
        <Contacto/>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
