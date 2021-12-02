import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function CardView(props){

    


    return(
        
        <div>
            <Row xs={1} md={4} className="g-4 m-3">
            {
                props.props.dataSource.map((element) => {
                    const url = `https://raw.githubusercontent.com/V4q3r0/img_movieserie/master/`+element.id_movie+`.png`
                    return (
                        <Col>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={url}/>
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