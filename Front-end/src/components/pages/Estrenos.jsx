import React ,{Fragment, useState}from 'react'
import { Container, Button } from 'react-bootstrap';
import Carousell from '../Carousell';
import Movies from '../../services/service_movie'
import Series from  '../../services/service_serie'
import { useParams } from 'react-router';

const Estrenos = () => {

    const {id} = useParams();

    const [modal, setModal] = useState('none');

    const seeModal = () => {
        setModal('block')
    }

    const closeModal = () => {
        setModal('none')
    }


    return (  
        <Fragment>
            <Carousell/>

            <Container>
                <hr />
                <h1>Estrenos Peliculas</h1>
                <Movies amount={8} />
                { id && <Button size="lg" className="btn btn-primary m-2 " onClick={seeModal}>Agregar</Button>}
                <hr />
                
                <h1>Estrenos Series</h1>
                <Series amount={8} />
                { id && <Button size="lg" className="btn btn-primary m-3">Agregar</Button>}
            </Container>

            <div style={{display: modal}} className="editar">
                <form>
                    <div className="contenedor">
                        <span onClick={closeModal} className="close" title="Cerrar Modal">&times;</span>
                        <div className="titulo">
                            <h2>Agregar película</h2>
                        </div>
                        <div className="editDatos">
                            <label for="nombre">Nombre película:</label>
                            <input className="id" type="text" name="nombre"  />
                            <br />
                            <label for="marca">Fecha estreno:</label>
                            <input className="id" type="text" name="marca" />
                            <br />
                            <label for="precio">Cine:</label>
                            <input className="id" type="text" name="precio" />
                            <br />
                            <label htmlFor="">URL imagen</label>
                            <input className="id" type="text" name="url" />
                            <br />
                            <select name="" id="">
                                <option value="">Seleccione un genero para la película</option>
                                <option value="">Acción</option>
                                <option value="">Ciencia ficción</option>
                                <option value="">Drama</option>
                                <option value="">Comedia</option>
                                <option value="">Animación</option>
                            </select>
                            <br />
                            <input type="submit" value="Actualizar" name="btnEditar" />
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
 
export default Estrenos;