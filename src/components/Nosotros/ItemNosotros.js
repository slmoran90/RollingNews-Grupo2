import React from "react";
import { Container} from "react-bootstrap";

const ItemNosotros = (props) => {
    return (
        <Container>
            {/* continuacion sistema de grillas */}
            <div className='d-flex m-2 font-weight-bold text-dark'>
                <div className="col-md-6 mr-4">
                    <img
                        src={props.info.avatar}
                        className="w-100"
                        alt={props.info.nombreApellido}
                    ></img>
                </div>
                <div className="col-md-6">
                    <h5>{props.info.nombreApellido}</h5>
                    <div className="linea"></div>
                    <p className="mt-2">{props.info.puesto}</p>
                </div>
            </div>
      </Container>
  );
};

export default ItemNosotros;







