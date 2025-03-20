import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CreatePenalties = () => {
    const [cars, setCars] = useState([])
    const navigate = useNavigate()

    const getCars = async () => {
        try {
            const response = await axios.get('/car')

            setCars(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getCars()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.target)

        try {
            const response = await axios.post('/penalties', data)

            console.log(response.data)

            navigate('/penalties')
        } catch (error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Create Penalties</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>penalties_name</Form.Label>
            <Form.Control type='text' name='penalties_name'/>
        </Form.Group>

        <Form.Group>
            <Form.Label>description</Form.Label>
            <Form.Control as='textarea' name='description'/>
        </Form.Group>

        <Form.Group>
            <Form.Label>id_car</Form.Label>
            <Form.Select name='id_car'>
                {cars.map((car) => (
                    <option value={car.id} >{car.name_car}</option>
                ))}
            </Form.Select>
        </Form.Group>

        <Form.Group>
            <Form.Label>penalties_total</Form.Label>
            <Form.Control type='number' name='penalties_total'/>
        </Form.Group>

        <Button type='submit' className='mt-3'>Submit</Button>
    </Form>
    </div>
  )
}

export default CreatePenalties
