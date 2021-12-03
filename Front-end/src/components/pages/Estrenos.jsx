import React ,{Fragment}from 'react'
import { Container, Accordion} from 'react-bootstrap';
import Carousell from '../Carousell';
import RegisterMovie from '../MovieRegister'
import RegisterSerie from '../SerieRegister'
import Movies from '../../services/service_movie'
import Series from  '../../services/service_serie'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Estrenos = () => {

    const {id} = useParams();

    return (  
        <Fragment>
            <Carousell/>

            <Container>
                <hr />
                <h1>Estrenos Peliculas</h1>
                <Movies amount={8} />

                { id && 
                <Fragment>
                    <Link className="btn btn-primary m-4" to={`/Administrar/:${id}`}>Administrar</Link>
                    <Accordion className="mt-4" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className = "titulo">Mostrar</Accordion.Header>
                            <Accordion.Body>
                                <h1 className="mb-4">Agregar Pelicula</h1>
                                <RegisterMovie/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Fragment>}
                <hr />
                
                <h1>Estrenos Series</h1>
                <Series amount={8} />
                { id && 
                <Fragment>
                    <Link className="btn btn-primary m-4" to={`/Administrar/:${id}`}>Administrar</Link>
                    <Accordion className="mt-4" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className = "titulo">Mostrar</Accordion.Header>
                        <Accordion.Body>
                            <h1>Agregar Serie</h1>
                            <RegisterSerie />
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Fragment>
                }
            </Container>
        </Fragment>
    );
}
 
export default Estrenos;