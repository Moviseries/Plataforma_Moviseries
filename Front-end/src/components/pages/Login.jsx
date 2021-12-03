import React,{useState} from 'react'
import { Container, Form, Button, Card} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Estrenos from './Estrenos';
import { Router, Navigate } from 'react-router';

const Login = (props) => {

    const {register,handleSubmit, formState: {errors}} = useForm();
    const [entradas, setentradas] = useState([])
    const [login, setLogin] = useState(props.login);
    const onSubmit = (data, e) => {
        setentradas([...entradas,data])
        e.target.reset()
        props.datos.dataSource.map((dato) => {
            if(dato.username === data.username && dato.password === data.password){
                setLogin(true)
            }
        })
    }



    return ( 
        <Container>
            {!login &&
            <div>
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
                            <Button type="submit" variant="primary" className="m-3">Login</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
            }
            {login &&
                <Navigate to={`/Home/${login}`} />
            }
        </Container>
    );
}
 
export default Login;