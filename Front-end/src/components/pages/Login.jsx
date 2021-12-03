import React,{useState} from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap';

const Login = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    return ( 
        <Container>
            <h1 className="mb-3 mt-3">Register</h1>
            <Card className="col-md-6 mx-auto" border="dark">
                <Form className="m-3" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control 
                            type="text"
                            required
                            defaultValue=""
                        />
                        <Form.Control.Feedback>¡userName valido!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">¡Ingresa un username!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            type="password"
                            required
                            defaultValue=""/>
                        <Form.Control.Feedback>Contraseña valida</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">¡Necesitas una contraseña!</Form.Control.Feedback>
                        <Button type="submit" variant="dark" className="m-3">Registrar</Button>
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    );
}
 
export default Login;