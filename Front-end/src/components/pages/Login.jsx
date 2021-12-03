import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Login = () => {

    const {register,handleSubmit, formState: {errors}} = useForm();
    const [entradas, setentradas] = useState([])
    const onSubmit = (data, e) => {
        setentradas([...entradas,data])
        e.target.reset()
        console.log(data)
    }

    return ( 
        <Container>
            <h1 className="mb-3 mt-3">Login</h1>
            <Card className="col-md-6 mx-auto" border="dark">
                <Form className="m-3" onSubmit={handleSubmit(onSubmit)}>
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
                </Form>
            </Card>
        </Container>
    );
}
 
export default Login;