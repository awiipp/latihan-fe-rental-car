import axios from 'axios'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const {token, setToken} = useAuth();
    const navigate = useNavigate();

    // udah login ga boleh ke page login lagi
    if (token) {
        return <Navigate to={'/'}/>
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        const data = new FormData(e.target)

        try {
            const response = await axios.post('auth/login', data)

            setToken(response.data)

            return navigate('/')
        console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Login</h1>

      <Form onSubmit={handleLogin}>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' name='username'/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password'/>
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Login
