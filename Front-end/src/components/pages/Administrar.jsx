import React from 'react'
import Movie from '../../services/service_movie'
import Serie from '../../services/service_serie';
import { Container } from 'react-bootstrap';

const Administrar = () => {
    return ( 
        <Container>
            <h1 className="mt-3">Peliculas</h1>
            <hr />
            <Movie login={true}/>
            <h1 className="mt-3">Series</h1>
            <hr />
            <Serie login={true}/>
        </Container>
     );
}
 
export default Administrar;