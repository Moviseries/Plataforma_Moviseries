import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from '../images/img1.jpg'

export default function CardViewSeries(props){

    if(props.amount === 0){
        props.amount = props.props.length();
    }

    return(
        <div>
            <Row xs={1} md={4} className="g-4">
            {
                props.props.dataSource.slice(0,props.amount).map((element) => {
                    return (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img}/>
                                <Card.Body>
                                    <Card.Title>{element.name_serie}</Card.Title>
                                    <Card.Text><b>Fecha de estreno:</b> {element.url_imagen_serie}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
            }
            </Row>
        </div>
    );
}