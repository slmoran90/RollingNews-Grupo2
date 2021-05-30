import React from "react";
import { Container, Card, Col } from "react-bootstrap";


const ItemFotografia = (props) => {
    console.log(props)
    return (
        <Container>
            {/* continuacion sistema de grillas */}
            <Col>
                <Card className='imagen'>
                    <Card.Img src={props.info.urlFotografia} />
                </Card>
            </Col>
        </Container>
    );
};

export default ItemFotografia;
