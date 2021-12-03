import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Logo from '../images/logo.svg'
import User from '../images/user.svg'
import Gender from '../services/service_gender'

const NavBar = () => {

    const title = 
        <Navbar.Brand href="inicio">  
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
                <Navbar.Brand href="/">       
                    <img
                        alt="Logo"
                        src={Logo}
                        width="40"
                        height="40"
                        className="d-inline-block"
                    />{' '}
                    Moviseries
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="mr-2" href="/Home">Inicio</Nav.Link>
                        <Nav.Link className="mr-2" href="/Movies">Peliculas</Nav.Link>
                        <Nav.Link className="mr-2" href="/Series">Series</Nav.Link>
                        <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                            <Gender />
                        </NavDropdown>
                    </Nav>

                    <NavDropdown title={title} className="mr-auto">
                            <NavDropdown.Item href="/Login">Iniciar Sesion</NavDropdown.Item>
                            <NavDropdown.Item href="/Register">Registrarse</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;