import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./Toolbar.css";

const Toolbar = ({showCreateModal}) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Instituto de Biología Animal - Insectos</Navbar.Brand>
                <Nav className="me-auto my-2 my-lg-0">
                    <Nav.Link href="#home" onClick={showCreateModal}>Crear +</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Toolbar;
