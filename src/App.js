import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Navegacion from "./components/common/Navegacion";
import NuevaCategoria from "./components/categorias/NuevaCategoria";
import ListarCategoria from "./components/categorias/ListarCategoria";
import ListarNoticiasxCateg from "./components/noticias/ListarNoticiasxCateg";
import NoticiaCompleta from "./components/noticias/NoticiaCompleta";
import Error404 from "./components/Error404";
import Swal from "sweetalert2";
import Footer from "./components/common/Footer";
import ListarNoticias from "./components/noticias/ListarNoticias";

function App() {
  // URL donde estan guardadas las categorias
  const URLcategorias = process.env.REACT_APP_API_URLcategorias;

  // URL donde estan almacenadas las noticias
    const URLnoticias = process.env.REACT_APP_API_URLnoticias;
  
  // state para get de categorias 
  const [categorias, setCategorias] = useState([]);

    // state para almacenar resultados del fetch
    const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarAPIcategorias();
    consultarAPInoticias();
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
      Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
    }
  };

  const consultarAPInoticias = async () => {
        try {
            const respuesta = await fetch(URLnoticias);
            if (respuesta.status === 200) {
                const noticiasFiltradas = await respuesta.json();
                setNoticias(noticiasFiltradas);
            }
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Ocurrió un Error!',
                'Inténtelo en unos minutos.',
                'error'
            )
        }
    }

  return (
    <Router>
      <Navegacion></Navegacion>

      <Switch>
        <Route exact path="/">
          {/* llamar al componente inicio */}
        </Route>
        
        <Route exact path="/noticias/listar">
          {/* muestra lista de TODAS las noticias */}
          <ListarNoticias
            noticias={noticias}
            consultarAPInoticias={consultarAPInoticias}
          ></ListarNoticias>
        </Route>

        <Route exact path="/categorias/listar">
          {/* muestra lista de categorias existentes */}
          <ListarCategoria
            categorias={categorias}
            consultarAPIcategorias={consultarAPIcategorias}
          ></ListarCategoria>
        </Route>
        
        <Route exact path="/noticias/listar/:nombreCategoria">
          {/* muestra lista de noticias de una categoria */}
          <ListarNoticiasxCateg
            consultarAPIcategorias={consultarAPIcategorias}
          ></ListarNoticiasxCateg>
        </Route>
        
        <Route exact path="/noticias/noticiaCompleta/:id">
          {/* muestra la noticia completa, seleccionada en la lista de noticia de una categoria */}
          <NoticiaCompleta></NoticiaCompleta>
        </Route>
        
        <Route exact path="/categorias/nueva">
          {/* permite el alta de una nueva categoria */}
          <NuevaCategoria
            consultarAPIcategorias={consultarAPIcategorias}
          ></NuevaCategoria>
        </Route>
        
        <Route exact path="/noticias/nueva">
        </Route>
        
        <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      {/* se invoca el footer */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
