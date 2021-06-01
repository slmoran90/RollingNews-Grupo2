import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//== Para que vea app.css tiene que ir 1- BOOTSTRAP 2-APP.JS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import PaginaPrincipal from "./components/paginaPrincipal/PaginaPrincipal";
import ComponenteNoticia from "./components/ComponenteNoticia";
import ListaPorCategoriaUser from "./components/ListaPorCategoriaUser";
import NuevaCategoria from "./components/categorias/NuevaCategoria";
import ListarCategoria from "./components/categorias/ListarCategoria";
import ListarNoticiasxCateg from "./components/noticias/ListarNoticiasxCateg";
import Swal from "sweetalert2";
import ListarNoticias from "./components/noticias/ListarNoticias";
import NuevaNoticia from "./components/noticias/NuevaNoticia";
import EditarNoticia from "./components/noticias/EditarNoticia";
import Error from "./components/Error";
import Nosotros from './components/Nosotros/Nosotros';
import MostrarNoticia from "./components/noticias/MostrarNoticia";
import Fotografia from "./components/fotografia/Fotografia";

function App() {
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
  const [noticiasEco, setNoticiasEco] = useState([]);
  const [noticiasDeportes, setNoticiasDeportes] = useState([]);
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
    cargarNoticias();
  }, []);
  const cargarNoticias = async () => {
    try {
      const respuesta = await fetch(URLnoticias);
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
          (noticia) => noticia.categoria === "Economia"
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
  // funcion GET de categorias
  const consultarAPIcategorias = async () => {
    try {
      const respuesta = await fetch(URLcategorias);
      if (respuesta.status === 200) {
        const listaCategorias = await respuesta.json();
        setCategorias(listaCategorias);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrió un Error en Catgorias", "Inténtelo en unos minutos.", "error");
    }
  };
  // funcion GET de noticias
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
        'Ocurrió un Error en Noticias!',
        'Inténtelo en unos minutos.',
        'error'
      )
    }
  }
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
        <Route exact path="/noticia/:categoria/:id">
          <ComponenteNoticia />
        </Route>
        <Route exact path="/noticia/:categoria">
          <ListaPorCategoriaUser />
        </Route>
        <Route exact path="/categorias/fotografias">
          <Fotografia></Fotografia>
        </Route>

        {/* -- Menu Administrador -- */}
        <Route exact path="/categorias/nueva">
          <NuevaCategoria
            consultarAPIcategorias={consultarAPIcategorias}
          ></NuevaCategoria>
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
        
        <Route exact path="/noticias/mostrarNoticia/:id">
          {/* muestra la noticia completa, seleccionada en la lista de noticias */}
          <MostrarNoticia></MostrarNoticia>
        </Route>


        <Route exact path="/noticias/nueva">
          <NuevaNoticia noticias={noticias}
            consultarAPInoticias={consultarAPInoticias}></NuevaNoticia>
        </Route>
        <Route exact path="/noticias/listar">
          {/* muestra lista de TODAS las noticias */}
          <ListarNoticias
            noticias={noticias}
            consultarAPInoticias={consultarAPInoticias}>
          </ListarNoticias>
        </Route>
        <Route exact path="/noticias/editar/:id">
          <EditarNoticia consultarAPInoticias={consultarAPInoticias}></EditarNoticia>
        </Route>
        {/* -- Fin menu Administrador --*/}
        
        <Route exact path="/nosotros">
          <Nosotros></Nosotros>
        </Route>
        <Route path="/">
          <Error></Error>
        </Route>
        
      </Switch>
      {/* se invoca el footer */}
      <Footer></Footer>
    </Router>
  );
}
export default App;