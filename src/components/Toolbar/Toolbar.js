import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Toolbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav>
                    <NavDropdown title="Natalia Fajardo" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ver Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Cerrar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Toolbar;
