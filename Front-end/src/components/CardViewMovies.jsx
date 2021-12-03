import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function CardViewMovies(props){

    if(props.amount === 0 && props.amount === null){
        props.amount = props.props.dataSource.length();
    }

    return(
        <div>
            <Row xs={1} md={4} className="g-4">
            {
                props.props.dataSource.slice(0,props.amount).map((element) => {
                    return (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={element.url_imagen_movie}/>
                                <Card.Body>
                                    <Card.Title>{element.name_movie}</Card.Title>
                                    <Card.Text><b>Fecha de estreno:</b> {element.fecha_movie}</Card.Text>
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