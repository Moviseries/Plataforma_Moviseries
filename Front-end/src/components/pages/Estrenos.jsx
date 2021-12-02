import React ,{Fragment}from 'react'
import Container from 'react-bootstrap/esm/Container';
import Carousell from '../Carousell';
import Movies from '../../services/service_movie'
import Series from  '../../services/service_serie'

const Estrenos = () => {
    return (  
        <Fragment>
            <Carousell/>

            <Container>
                <hr />
                <h1>Estrenos Peliculas</h1>
                <Movies amount={8} />
                <hr />
                <h1>Estrenos Series</h1>
                <Series />

            </Container>
        </Fragment>
    );
}
 
export default Estrenos;