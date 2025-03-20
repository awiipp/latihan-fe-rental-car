import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CreateReturn = () => {
  const [registers, setRegisters] = useState([])
  const [cars, setCars] = useState([])
  const [penalties, setPenalties] = useState([])
  const navigate = useNavigate()

  const getRegisters = async () => {
    try {
      const response = await axios.get('/register')

      setRegisters(response.data)
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

  const getPenalties = async () => {
    try {
      const response = await axios.get('/penalties')

      setPenalties(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getRegisters()
    getCars()
    getPenalties()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    try {
      const response = await axios.post('/return', data)

      console.log(response.data)

      navigate('/return')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div>
      <h1>Create Return</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>id_tenant</Form.Label>
          <Form.Select name='id_tenant'>
            {registers.map((tenant) => (
              <option value={tenant.id} key={tenant.id}>{tenant.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>id_car</Form.Label>
          <Form.Select name='id_car'>
            {cars.map((car) => (
              <option value={car.id} key={car.id}>{car.name_car}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>id_penalties</Form.Label>
          <Form.Select name='id_penalties'>
            {penalties.map((penalty) => (
              <option value={penalty.id} key={penalty.id}>{penalty.penalties_name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>date_borrow</Form.Label>
          <Form.Control type='date' name='date_borrow'/>
        </Form.Group>

        <Form.Group>
          <Form.Label>date_return</Form.Label>
          <Form.Control type='date' name='date_return'/>
        </Form.Group>

        <Form.Group>
          <Form.Label>penaltie_total</Form.Label>
          <Form.Control type='number' name='penalties_total'/>
        </Form.Group>

        <Form.Group>
          <Form.Label>discount</Form.Label>
          <Form.Control type='number' name='discount'/>
        </Form.Group>

        <Form.Group>
          <Form.Label>total</Form.Label>
          <Form.Control type='number' name='total'/>
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default CreateReturn
