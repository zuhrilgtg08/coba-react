import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Crud React</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent