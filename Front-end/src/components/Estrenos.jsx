import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Movie from '../services/service_movie'

const Estrenos = () => {
    return (  
        <Container>

            <h1>Estrenos Peliculas</h1>
            <Movie />
            
        </Container>
    );
}
 
export default Estrenos;