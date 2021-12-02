import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function CardView(props){

    return(
        <div>
            {
                props.props.dataSource.map((element) => {
                    return (
                        <Row>
                            <Col>
                                <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src="https://via.placeholder.com/286x280"/>
                                <Card.Body>
                                    <Card.Title>{element.name_movie}</Card.Title>
                                </Card.Body></Card>
                            </Col>
                        </Row>
                    );
                })
                
            }
        </div>
    );
}