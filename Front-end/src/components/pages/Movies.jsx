import React from 'react'
import Cards from '../../services/service_movie'
import { Container } from 'react-bootstrap';

const Movies = () => {
    return ( 
        <Container>
            <h1 className="mt-3">Peliculas</h1>
            <hr />
            <Cards />
        </Container>
     );
}
 
export default Movies;