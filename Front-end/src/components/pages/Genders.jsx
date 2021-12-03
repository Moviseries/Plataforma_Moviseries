import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import GenderMovie from '../../services/service_gender_movie';
import GenderSerie from '../../services/service_gender_serie';

const Genders = () => {
    const {id, name} = useParams()

    return (  
        <Container>
            <h1>Estrenos de {name}</h1>
            <h2>Películas</h2>
            <GenderMovie props={id} />
            <hr />
            <h2>Series</h2>
            <GenderSerie props={id} />
        </Container> 
    );
}
 
export default Genders;