import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CreateRent = () => {
    const [registers, setRegisters] = useState([])
    const [cars, setCars] = useState([])
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

    useEffect(() => {
        getCars()
        getRegisters()
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const data = new FormData(e.target)
  
      try {
        const response = await axios.post('/rent', data)
  
        console.log(response.data)
  
        navigate('/rent')
      } catch (error) {
        console.log(error.response.data)
      }
    }
    
    return (
      <div>
        <h1>Add Rent</h1>
  
        <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>id_tenant</Form.Label>
              <Form.Select>
                {registers.map((tenant) => (
                    <option value={tenant.id}>{tenant.name}</option>
                ))}
              </Form.Select>
          </Form.Group>
          <Form.Group>
          <Form.Label>id_tenant</Form.Label>
            <Form.Select>
                    {cars.map((car) => (
                        <option value={car.id}>{car.name_car}</option>
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
              <Form.Label>down_payment</Form.Label>
              <Form.Control type='number' name='down_payment'/>
          </Form.Group>
          <Form.Group>
              <Form.Label>discount</Form.Label>
              <Form.Control type='number' name='discount'/>
          </Form.Group>
          <Form.Group>
              <Form.Label>total</Form.Label>
              <Form.Control type='number' name='total'/>
          </Form.Group>
  
          <Button type='submit' className='mt-3'>Submit</Button>
        </Form>
      </div>
    )
}

export default CreateRent
