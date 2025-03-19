import axios from 'axios'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CreateRegister = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    try {
      const response = await axios.post('/register', data)

      console.log(response.data)

      navigate('/register')
    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  return (
    <div>
      <h1>Add Register</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>no ktp</Form.Label>
            <Form.Control type='number' name='no_ktp'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>name</Form.Label>
            <Form.Control type='text' name='name'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>date_of_birth</Form.Label>
            <Form.Control type='date' name='date_of_birth'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control type='email' name='email'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control type='password' name='password'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>phone</Form.Label>
            <Form.Control type='number' name='phone'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>description</Form.Label>
            <Form.Control as='textarea' name='description'/>
        </Form.Group>

        <Button type='submit' className='mt-3'>Submit</Button>
      </Form>
    </div>
  )
}

export default CreateRegister
