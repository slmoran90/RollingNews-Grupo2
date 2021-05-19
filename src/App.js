import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicioo from './components/Inicioo';
import Nosotros from './components/Nosotros';




function App() {
    return (
        <Router>
            <Navegacion></Navegacion>
           {/* Navegacion */}
            {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
            <Switch>
                <Route exact path="/">
                    {/*  <PaginaPrincipal /> */}
                    <Inicioo></Inicioo>
                </Route>
                <Route exact path="/nosotros">
                <Nosotros></Nosotros>
                </Route>
                
            </Switch>
            <Footer></Footer>
        </Router>
    );
}

export default App;

