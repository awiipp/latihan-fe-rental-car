import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'

const Topbar = () => {
    const {token, setToken} = useAuth()

    const handleLogout = async (e) => {
        try {
            const response = await axios.get('/auth/logout') 

            setToken(null)

            console.log(response.data)
        } catch(error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand>Rent Car</Navbar.Brand>

                <Nav>
                    <Nav.Item>
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={'/car'}>Car</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={'/rent'}>Rent</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={'/return'}>Return</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={'/penalties'}>Penalties</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
                    </Nav.Item>
                    {token ? (
                        <Nav.Item>
                            <Nav.Link onClick={handleLogout}>logout</Nav.Link>
                        </Nav.Item>
                    ) : (
                        <Nav.Item>
                        <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                    </Nav.Item>
                    )}
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Topbar
