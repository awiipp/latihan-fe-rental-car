import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

const Topbar = () => {
  return (
    <div>
        <Navbar>
            <Container>
                <Navbar.Brand>Rent Car</Navbar.Brand>

                <Nav>
                    <Nav.Item>
                        <Nav.Link as={link} to={'/'}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={link} to={'/car'}>Car</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={link} to={'/'}>Rent</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={link} to={'/'}>Return</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={link} to={'/'}>Penalties</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={link} to={'/'}>Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={link} to={'/'}>Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Topbar
