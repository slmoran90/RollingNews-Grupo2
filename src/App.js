<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DolarAndWeather from './components/DolarAndWeather';
=======
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Navegacion from "./components/common/Navegacion";
import NuevaCategoria from "./components/categorias/NuevaCategoria";
import ListarCategoria from "./components/categorias/ListarCategoria";
import ListarNoticiasxCateg from "./components/noticias/ListarNoticiasxCateg";
import MostrarNoticia from "./components/noticias/MostrarNoticia";
import Error404 from "./components/Error404";
import Swal from "sweetalert2";
import Footer from "./components/common/Footer";
>>>>>>> f9efc59c6eac8ed4fb2e6650105a0d08fce69022

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
    // buscar las noticias que tengan las categoria pasada como parametro en la URL
        try {
            const respuesta = await fetch(URLnoticias);
            if (respuesta.status === 200) {
                const noticiasFiltradas = await respuesta.json();
                await setNoticias(noticiasFiltradas);
                // console.log('noticias en app: ',noticiasFiltradas);
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
<<<<<<< HEAD
    <div className="App">
      <h1>Proyecto final RollingNews Grupo 2</h1>
      <DolarAndWeather />
    </div>
=======
    <Router>
      <Navegacion></Navegacion>

      <Switch>
        <Route exact path="/">
          {/* llamar al componente inicio */}
        </Route>
        <Route exact path="/categorias/nueva">
          {/* permite el alta de una nueva categoria */}
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
        </Route>
        <Route exact path="/noticias/listar">
          {/* muestra lista de TODAS las noticias */}
        </Route>
        <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      {/* se invoca el footer */}
      <Footer></Footer>
    </Router>
>>>>>>> f9efc59c6eac8ed4fb2e6650105a0d08fce69022
  );
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginaPrincipal from "./components/paginaPrincipal/PaginaPrincipal";
import { useState } from "react";
import { useEffect } from "react";
import ComponenteNoticia from "./components/ComponenteNoticia";
import ListaPorCategoriaUser from "./components/ListaPorCategoriaUser";

function App() {
    const URLjsonServerNoticias = process.env.REACT_APP_API_NOTICIAS_URL;

    const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
    const [noticiasEco, setNoticiasEco] = useState([]);
    const [noticiasDeportes, setNoticiasDeportes] = useState([]);
    useEffect(() => {
        cargarNoticias();
    }, []);

    const cargarNoticias = async () => {
        try {
            const respuesta = await fetch(URLjsonServerNoticias);

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
                <Route exact path="/noticia/:categoria/:id">
                  <ComponenteNoticia />
                </Route>
                <Route exact path="/noticia/:categoria">
                  <ListaPorCategoriaUser />
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
>>>>>>> PaginaPrincipal
}

export default App;
