import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function CardViewSeries(props){

    if(props.amount === 0){
        props.amount = props.props.dataSource.length();
    }

    const HOST_API = "http://localhost:8080/api/";

    const deleteSerie = (id, e) => {
        console.log(id)
        fetch(HOST_API + "serie/"+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
    }

    return(
        <div>
            <Row xs={1} md={4} className="g-4">
            {
                props.props.dataSource.slice(0,props.amount).map((element) => {
                    return (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={element.url_imagen_serie}/>
                                <Card.Body>
                                    <Card.Title>{element.name_serie}</Card.Title>
                                    <Card.Text><b>Fecha de estreno:</b> {element.fecha_serie}</Card.Text>
                                    <Card.Text><b>Plataforma:</b> {element.plataforma}</Card.Text>
                                    {props.login && <Button style={{border: 'solid black 1px'}} className="btn btn-danger" onClick={() => deleteSerie(element.id_serie)}>Eliminar</Button>}
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