import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
// hoook para usar parametros
import { useParams, withRouter, useHistory } from "react-router-dom";
import ItemNoticiaxCateg from "./ItemNoticiaxCateg";
import Swal from "sweetalert2";

const ListarNoticiasxCateg = (props) => {
  let history = useHistory();

  const parametroCategoria = useParams().nombreCategoria;

  const [noticias, setNoticias] = useState([]);

  // URL donde estan almacenadas las noticias
  const URLnoticias =
    process.env.REACT_APP_API_URLnoticias +
    "/noticias-por-categoria/" +
    parametroCategoria;

  useEffect(async () => {
    if (props.adminUser !== true) {
      history.push("/");
    }
    // buscar las noticias que tengan las categoria pasada como parametro en la URL
    try {
      const respuesta = await fetch(URLnoticias);
      if (respuesta.status === 200) {
        const noticiasFiltradas = await respuesta.json();
        setNoticias(noticiasFiltradas);
        if (noticiasFiltradas.length === 0) {
          Swal.fire(
            "Atención!",
            "No hay noticias para la Categoría seleccionada",
            "warning"
          );

          //redireccionar
          props.history.push("/categorias/listar");
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrió un Error!", "Inténtelo en unos minutos.", "error");
    }
  }, []);

  // ordenar por fecha DESCENDENTE antes de mostrarlas
  const noticiasOrdenadas = noticias.sort(
    (a, b) =>
      new Date(b.fechaNoticia).getTime() - new Date(a.fechaNoticia).getTime()
  );

  return (
    <Container className="py-2 margenFondo">
      <h2 className="text-center my-3 py-3 formTitulos">
        Noticias por Categoría: {parametroCategoria}
      </h2>
      <Table responsive hover>
        <thead>
          <tr className="textoNoticia">
            <th>Destacada</th>
            <th>Fecha</th>
            <th>Titulo</th>
            <th className="d-none d-md-table-cell">Noticia Breve</th>
            <th className="d-none d-md-table-cell">Autor</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {noticiasOrdenadas.map((valor, indice) => (
            <ItemNoticiaxCateg key={indice} info={valor}></ItemNoticiaxCateg>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default withRouter(ListarNoticiasxCateg);
