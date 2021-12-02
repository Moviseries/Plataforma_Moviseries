import React ,{useState} from 'react'
import { Container, Form, Button, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {register,handleSubmit, formState: {errors}} = useForm();
    const [entradas, setentradas] = useState([])
    const onSubmit = (data, e) => {
        console.log(data)
        setentradas([...entradas,data])
        e.target.reset()
    }

    return ( 
        <Container>
            <h1 className="mt-3">Register</h1>

                <Form className="col-md-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"/>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </Form>

        </Container>
    );
}
 
export default Register;