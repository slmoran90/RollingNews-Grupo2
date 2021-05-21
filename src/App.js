import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import Error from './components/Error';
import Inicio from './components/Inicio';




function App() {
    return (
        <Router>
            <Navegacion></Navegacion>
           {/* Navegacion */}
            {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
            <Switch>
                <Route path="/error404">
                    <Error></Error>
                </Route>
                <Route path="/">
                    <Inicio></Inicio>
                </Route>
            </Switch>
            <Footer></Footer>
        </Router>
    );
}

export default App;

