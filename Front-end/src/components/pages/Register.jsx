import React ,{useState} from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {register,handleSubmit, formState: {errors}} = useForm();
    const [entradas, setentradas] = useState([])
    const onSubmit = (data, e) => {
        setentradas([...entradas,data])
        e.target.reset()
        console.log(data)

        const HOST_API = "http://localhost:8080/api/";
        fetch(HOST_API + "user", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id_user: null,
                username: data.username,
                password: data.password,
                email: data.email
            })
        })
    }

    return ( 
        <Container>
            <h1 className="mb-3 mt-3">Register</h1>
            <Card className="col-md-6 mx-auto" border="dark">
                <form className="m-3" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control 
                            className=""
                            type="text"
                            {
                                ...register("username",{
                                    required: {value:true}
                                })
                            }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control 
                            name="gmail"
                            type="email" 
                            {
                                ...register("email",{
                                    required: {value:true}
                                })
                            }
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password"
                            {
                                ...register("password",{
                                    required: {value:true}
                                })
                            }
                            />
                        <Button type="submit" variant="dark" className="m-3">Registrar</Button>
                    </Form.Group>
                </form>
            </Card>
        </Container>
    );
}
 
export default Register;