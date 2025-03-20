import axios from 'axios'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CreateCar = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    try {
      const response = await axios.post('/car', data)

      console.log(response.data)

      navigate('/car')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div>
      <h1>Create Car</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>no_car</Form.Label>
            <Form.Control type='number' name='no_car'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>name_car</Form.Label>
            <Form.Control type='text' name='name_car'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>type_car</Form.Label>
            <Form.Control type='text' name='type_car'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>year</Form.Label>
            <Form.Control type='number' name='year'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>seat</Form.Label>
            <Form.Control type='number' name='seat'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>image</Form.Label>
          <Form.Control type='file' accept='image/*' name='image'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>total</Form.Label>
            <Form.Control type='number' name='total'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>price</Form.Label>
            <Form.Control type='number' name='price'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>status</Form.Label>
            <Form.Control type='text' name='status'/>
        </Form.Group>

        <Button type='submit' className='mt-3'>Submit</Button>
      </Form>
    </div>
  )
}

export default CreateCar
