import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import Particles from "react-particles-js";
import ItemCategoria from "./ItemCategoria";

const ListarCategoria = (props) => {
  // console.log('props en listar categoria: ',props)
  return (
    <div className="main-form">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
      <Container className="py-3 listaCat">
        <h3 className="text-center my-3 py-3 text-light">
          Categorías
        </h3>
        <ListGroup>
          {props.categorias.map((categoria) => (
            <ItemCategoria
              categoria={categoria}
              key={categoria.id}
              consultarAPIcategorias={props.consultarAPIcategorias}
            ></ItemCategoria>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ListarCategoria;
