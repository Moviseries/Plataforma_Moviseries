import React from 'react'
import Cards from '../../services/service_serie'
import { Container } from 'react-bootstrap';

const Series = () => {
    return (
        <Container>
            <h1 className="mt-3">Series</h1>
            <hr />
            <Cards />
        </Container>
      );
}
 
export default Series;