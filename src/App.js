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
import NuevaCategoria from "./components/categorias/NuevaCategoria";
import ListarCategoria from "./components/categorias/ListarCategoria";
import ListarNoticiasxCateg from "./components/noticias/ListarNoticiasxCateg";
import MostrarNoticia from "./components/noticias/MostrarNoticia";
import Swal from "sweetalert2";
import ListarNoticias from "./components/noticias/ListarNoticias";
import NuevaNoticia from "./components/noticias/NuevaNoticia";
import EditarNoticia from "./components/noticias/EditarNoticia";
import Error from "./components/Error";
import Nosotros from './components/Nosotros';
import Login from "./components/login/Login";
import Admin from "./components/login/Admin";
function App() {

  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
  const [noticiasEco, setNoticiasEco] = useState([]);
  const [noticiasDeportes, setNoticiasDeportes] = useState([]);
  // URL donde estan guardadas las categorias
  const URLcategorias = process.env.REACT_APP_API_URLcategorias;
  // URL donde estan almacenadas las noticias
  const URLnoticias = process.env.REACT_APP_API_URLnoticias;
  // URL donde esta almacenado el admin
  const user = process.env.REACT_APP_API_URLusers;
  const [adminUser, setAdminUser] = useState();
  const [usuarios, setUsuarios] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  // state para get de categorias 
  const [categorias, setCategorias] = useState([]);
  // state para almacenar resultados del fetch
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    consultarAPIcategorias();
    consultarAPInoticias();
    cargarNoticias();
    consultarAPIusers();
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
      Swal.fire("Ocurrió un Error", "Inténtelo en unos minutos.", "error");
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
        'Ocurrió un Error',
        'Inténtelo en unos minutos.',
        'error'
      )
    }
  };

  const consultarAPIusers = async() => {
  const consulta = await fetch(user);
  const respuesta = await consulta.json();
  if (consulta.status !== 200) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrio un error, intentelo nuevamente",
    });
  }
  //Guardar en el state
  setUsuarios(respuesta);
  };

  return (
    <Router>
      <Navegacion
       setAdminUser={setAdminUser}
       adminUser={adminUser}
       usuarios={usuarios}
      ></Navegacion>
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

        <Route exact path="/categorias/nueva">
          {/* permite el alta de una nueva categoria */}
          <NuevaCategoria
            consultarAPIcategorias={consultarAPIcategorias}
            adminUser={adminUser}>
          </NuevaCategoria>
        </Route>
        <Route exact path="/categorias/listar" component={ListarCategoria}>
          {/* muestra lista de categorias existentes */}
          <ListarCategoria
            categorias={categorias}
            consultarAPIcategorias={consultarAPIcategorias}
            adminUser={adminUser}
            
          ></ListarCategoria>
        </Route>
        <Route exact path="/noticias/listar/:nombreCategoria">
          {/* muestra lista de noticias de una categoria */}
          <ListarNoticiasxCateg
            consultarAPIcategorias={consultarAPIcategorias}
            adminUser={adminUser}>
          </ListarNoticiasxCateg>
        </Route>
        
        {/* <Route exact path="/noticias/mostrarNoticia/:id"> */}
          {/* muestra la noticia completa, seleccionada en la lista de noticias */}
          {/* <MostrarNoticia></MostrarNoticia> */}
        {/* </Route> */}
        
        <Route exact path="/noticias/nueva">
          <NuevaNoticia noticias={noticias}
            consultarAPInoticias={consultarAPInoticias}>
               adminUser={adminUser}
          
            </NuevaNoticia>
        </Route>
        <Route exact path="/noticias/listar">
          {/* muestra lista de TODAS las noticias */}
          <ListarNoticias
            noticias={noticias}
            consultarAPInoticias={consultarAPInoticias}>
             adminUser={adminUser}
          </ListarNoticias>
        </Route>
        <Route exact path="/noticias/editar/:id">
          <EditarNoticia consultarAPInoticias={consultarAPInoticias}
           adminUser={adminUser}>

           </EditarNoticia>
        </Route>
        <Route exact path="/nosotros">
          <Nosotros></Nosotros>
        </Route>
        <Route exact path="/login" component={Login} >
          <Login usuarios={usuarios} setAdminUser={setAdminUser} ></Login>
        </Route>
        <Route exact path="/admin" component={Admin}>
          <Admin adminUser={adminUser} ></Admin>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      {/* se invoca el footer */}
      <Footer></Footer>
    </Router>
  );
}
export default App;