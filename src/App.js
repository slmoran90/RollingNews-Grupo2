import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import PaginaPrincipal from './components/paginaPrincipal/PaginaPrincipal';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
    const URLjsonServerNoticias = process.env.NOTICIAS_URL;
    console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ URLjsonServerNoticias", URLjsonServerNoticias)
    const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);

    useEffect(() => {
        cargarNoticias();
    }, []);

    const cargarNoticias = async () => {
        try {
            const respuesta = await fetch('http://localhost:3004/noticias');
            
            if(respuesta.status === 200) {
                const noticias = (await respuesta.json());
                console.log("🚀 ~ file: App.js ~ line 27 ~ cargarNoticias ~ noticias", noticias)
                noticias.filter(noticia => noticia.destacada !== "true");
                console.log(noticias);
                //setNoticiasDestacadas(noticias);
            }
        } catch (error) {
            console.log(error, 'este es un error');
        }
    }

    return (
        <Router>
            <Navegacion></Navegacion>
            {/*Usaremos operador ternario para mostrar barra de navAdmin o NavNormal*/}
            <Switch>
                <Route exact path="/">
                     <PaginaPrincipal noticiasDestacadas={noticiasDestacadas}/>
                </Route>
                <Route>
                  {/* <Categorias /> */}
                </Route>
                <Route>
                 {/*  <AcercaDeNosotros /> */}
                </Route>
                <Route>
                  {/* <Contacto /> */}
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
            <Footer></Footer>
        </Router>
    );
}

export default App;

