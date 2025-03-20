import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePenalties = () => {
    const [data, setData] = useState({})
    const [cars, setCars] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
          const response = await axios.get(`/penalties/${id}`)
    
          setData(response.data)
        } catch (error) {
          console.log(error.response.data)
        }
      }

    const getCars = async () => {
        try {
            const response = await axios.get('/car')

            setCars(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        fetchData()
        getCars()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.target)

        data.append('_method', 'PUT')

        try {
            const response = await axios.post(`/penalties/${id}`, data)

            console.log(response.data)

            navigate('/penalties')
        } catch (error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Update Penalties</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>penalties_name</Form.Label>
            <Form.Control type='text' name='penalties_name' value={data.penalties_name} onChange={(e) => setData({...data, penalties_name: e.target.value})}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>description</Form.Label>
            <Form.Control as='textarea' name='description' value={data.description} onChange={(e) => setData({...data, description: e.target.value})}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>id_car</Form.Label>
            <Form.Select name='id_car' value={data.id_car} onChange={(e) => setData({...data, id_car: e.target.value})}>
            {cars.map((car) => (
                <option key={car.id} value={car.id}>{car.name_car}</option>
            ))}
            </Form.Select>
        </Form.Group>

        <Form.Group>
            <Form.Label>penalties_total</Form.Label>
            <Form.Control type='number' name='penalties_total' value={data.penalties_total} onChange={(e) => setData({...data, penalties_total: e.target.value})}/>
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default UpdatePenalties
