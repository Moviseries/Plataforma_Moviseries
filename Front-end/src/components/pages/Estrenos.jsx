import React ,{Fragment}from 'react'
import { Container, Button } from 'react-bootstrap';
import Carousell from '../Carousell';
import Movies from '../../services/service_movie'
import Series from  '../../services/service_serie'
import { useParams } from 'react-router';

const Estrenos = () => {

    const {id} = useParams();
    return (  
        <Fragment>
            <Carousell/>

            <Container>
                <hr />
                <h1>Estrenos Peliculas</h1>
                <Movies amount={8} />
                { id && <Button size="lg" className="btn btn-primary m-2 " onClick={ChangeModalMovie}>Agregar</Button>}
                <hr />
                
                <h1>Estrenos Series</h1>
                <Series amount={8} />
                { id && <Button size="lg" className="btn btn-primary m-3" onClick={ChangeModalSerie}>Agregar</Button>}
            </Container>

            <div style={styleMovie}>
                <p>Hola mundo</p>
            </div>
        </Fragment>
    );
}
 
export default Estrenos;