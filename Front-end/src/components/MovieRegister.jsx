import React ,{useState}from 'react';
import { Card, Form, Row, Col,DropdownButton ,Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MovieRegister = () => {

    const {register,handleSubmit, formState: {errors}} = useForm();
    const [entradas, setentradas] = useState([])
    const onSubmit = (data, e) => {
        setentradas([...entradas,data])
        console.log(data)
        e.target.reset()

        const HOST_API = "http://localhost:8080/api/";
        fetch(HOST_API + "movie", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id_movie: null,
                name_movie: data.name_movie,
                fecha_movie: data.fecha_movie,
                url_imagen_movie: data.url_imagen_movie,
                cine: data.cine,
                gender: data.gender
            })
        })
    }

    return ( 
        <Card className ="m-5" border="dark">
            <Form className ="m-3" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} className="m-3">
                <Form.Label column sm="2">Nombre</Form.Label>
                <Col sm="10">
                <Form.Control 
                    type="text"
                    {
                        ...register("name_movie",{
                            required: {value:true}
                        })
                    }
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="m-3">
                <Form.Label column sm="2">Fecha de estreno</Form.Label>
                <Col sm="10">
                <Form.Control 
                    type="text"
                    {
                        ...register("fecha_movie",{
                            required: {value:true}
                        })
                    }
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="m-3">
                <Form.Label column sm="2">Genero</Form.Label>
                <Col sm="10">
                    <Form.Select
                        onChange={console.log()}
                        type="text"
                        {
                            ...register("gender",{
                                required: {value:true}
                            })
                        }>
                        <option >Abrir menu</option>
                        <option value="1">Accion</option>
                        <option value="3">Ciencia Ficcion</option>
                        <option value="4">Comedia</option>
                        <option value="5">Romance</option>
                        <option value="6">Drama</option>
                        <option value="7">Aventura</option>
                        <option value="8">Terror</option>
                        <option value="9">Fantasia</option>
                        <option value="10">Animacion</option>
                        <option value="11">Musica</option>
                        <option value="12">Suspenso</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="m-3">
                <Form.Label column sm="2">Salas de cine</Form.Label>
                <Col sm="10">
                <Form.Control 
                    type="text"
                    {
                        ...register("cine",{
                            required: {value:true}
                        })
                    }
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="m-3">
                <Form.Label column sm="2">Url de la imagen</Form.Label>
                <Col sm="10">
                <Form.Control 
                    type="text"
                    {
                        ...register("url_imagen_movie",{
                            required: {value:true}
                        })
                    }
                    />
                </Col>
            </Form.Group>
            <Button type="submit" variant="success" className="mt-3">  Save  </Button>
            </Form>
        </Card>
     );
}
 
export default MovieRegister;