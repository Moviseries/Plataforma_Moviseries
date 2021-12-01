import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Logo from '../images/logo.svg'
import User from '../images/user.svg'

const NavBar = () => {

    const title = 
        <Navbar.Brand href="#">  
            <img 
                src={User} 
                alt="" 
                width="30"
                height="30"
                className="m-0 p-0"/>
        </Navbar.Brand>

    return ( 
        <Navbar bg="dark" variant="dark" expand={true}>
            <Container fluid>
                <Navbar.Brand href="#">       
                    <img
                        alt="Logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Moviseries
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#features">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Peliculas</Nav.Link>
                        <Nav.Link href="#pricing">Series</Nav.Link>
                        <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Accion</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Comedia</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <NavDropdown title={title} className="mr-auto">
                            <NavDropdown.Item href="#action/3.1">Iniciar Sesion</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Registrarse</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;