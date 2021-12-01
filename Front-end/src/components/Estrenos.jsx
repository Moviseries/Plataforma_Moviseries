import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Estrenos = () => {
    return (  
        <Container>

            <h1>Estrenos</h1>

            <Row className="mb-3 mt-3 m-auto">
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="https://via.placeholder.com/286x280"/>
                        <Card.Body>
                            <Card.Title>Movie</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="https://via.placeholder.com/286x280"/>
                        <Card.Body>
                            <Card.Title>Movie</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="https://via.placeholder.com/286x280"/>
                        <Card.Body>
                            <Card.Title>Movie</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3 mb-3">
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="https://via.placeholder.com/286x280"/>
                        <Card.Body>
                            <Card.Title>Movie</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="https://via.placeholder.com/286x280"/>
                        <Card.Body>
                            <Card.Title>Movie</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="https://via.placeholder.com/286x280"/>
                        <Card.Body>
                            <Card.Title>Movie</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Estrenos;