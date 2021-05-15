import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Navegacion from "./components/common/Navegacion";
import NuevaCategoria from "./components/categorias/NuevaCategoria";
import ListarCategoria from "./components/categorias/ListarCategoria";
import ListarNoticiasxCateg from "./components/noticias/ListarNoticiasxCateg";
// import NoticiaCompleta from "./components/noticias/NoticiaCompleta";
import Error404 from "./components/Error404";
import Swal from 'sweetalert2'
import Footer from "./components/common/Footer";

function App() {
  // URL donde estan guardadas las categorias
  const URLcategorias = process.env.REACT_APP_API_URLcategorias;
  
  // state para get de categorias y ejecutar solo en montaje
  const [categorias, setCategorias] = useState([]);

  

  useEffect(() => {
    consultarAPIcategorias();
  }, []);

  const consultarAPIcategorias = async () => {
    try {
      const respuesta = await fetch(URLcategorias);
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
    // Crear sistema de rutas usando SIEMPRE Router y switch
    <Router>
      {/* se invoca el navbar*/}

      <Navegacion></Navegacion>
    
      <Switch>
        {/* Elegir entre las rutas. La barra / es la pagina principal del proyecto (idem index.hml) */}
        <Route exact path="/">
          {/* llamar al componente inicio */}
          
        </Route>
        <Route exact path="/categorias/nueva">
          <NuevaCategoria consultarAPIcategorias={consultarAPIcategorias}>
          </NuevaCategoria>
        </Route>
        <Route exact path="/categorias/listar">
          <ListarCategoria
            categorias={categorias}
            consultarAPIcategorias={consultarAPIcategorias}
          ></ListarCategoria>
        </Route>
        <Route exact path="/noticias/listar/:nombreCategoria">  
          {/* muestra noticias por categoria */}
          <ListarNoticiasxCateg consultarAPIcategorias={consultarAPIcategorias}></ListarNoticiasxCateg>
        </Route>
        <Route exact path="/noticias/noticiaCompleta/:id">
          {/* <NoticiaCompleta></NoticiaCompleta> */}
        </Route>
        <Route path='*'> 
          <Error404></Error404>
        </Route>
      </Switch>
      {/* se invoca el footer */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
