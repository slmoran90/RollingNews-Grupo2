import React from "react";
import { ListGroup } from "react-bootstrap";

const DolarListItem = (props) => {
    return (
        <ListGroup.Item>
            <h6 className="text-center">{props.moneda}</h6>
            <span className="d-flex justify-content-around flex-row mb-auto">
                <div className="mx-2 text-center d-flex flex-row ">
                    <div className="d-flex align-items-center">
                        <p className="font-list mb-0 mx-3">Compra</p>
                    </div>
                    <h5 className="rounded mb-0 mx-3">${props.moneda.value_buy}</h5>
                </div>
                <div className="mx-2 text-center d-flex flex-row ">
                    <div className="d-flex align-items-center">
                        <p className="font-list mb-0 mx-3">Venta</p>
                    </div>
                    <h5 className="rounded mb-0 mx-3">${props.moneda.value_sell}</h5>
                </div>
            </span>
        </ListGroup.Item>
    );
};

export default DolarListItem;
