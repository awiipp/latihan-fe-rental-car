import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateRent = () => {
  const [registers, setRegisters] = useState([])
  const [cars, setCars] = useState([])
  const [data, setData] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get(`/rent/${id}`)

      setData(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

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
      fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    data.append('_method', 'PUT')

    try {
      const response = await axios.post(`/rent/${id}`, data)

      console.log(response.data)

      navigate('/rent')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div>
      <h1>Update Rent</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>id_tenant</Form.Label>
            <Form.Select value={data.id_tenant} name='id_tenant' onChange={(e) => setData({...data, id_tenant: e.target.value})}>
              {registers.map((tenant) => (
                  <option value={tenant.id}>{tenant.name}</option>
              ))}
            </Form.Select>
        </Form.Group>
        <Form.Group>
        <Form.Label>id_tenant</Form.Label>
          <Form.Select value={data.id_car} name='id_car' onChange={(e) => setData({...data, id_car: e.target.value})}>
                  {cars.map((car) => (
                      <option value={car.id}>{car.name_car}</option>
                  ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>                                                                                                              
            <Form.Label>date_borrow</Form.Label>
            <Form.Control type='date' name='date_borrow' value={data.date_borrow} onChange={(e) => setData({...data, date_borrow: e.target.value})}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>date_return</Form.Label>
            <Form.Control type='date' name='date_return' value={data.date_return} onChange={(e) => setData({...data, date_return: e.target.value})}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>down_payment</Form.Label>
            <Form.Control type='number' name='down_payment' value={data.down_payment} onChange={(e) => setData({...data, down_payment: e.target.value})}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>discount</Form.Label>
            <Form.Control type='number' name='discount' value={data.discount} onChange={(e) => setData({...data, discount: e.target.value})}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>total</Form.Label>
            <Form.Control type='number' name='total' value={data.total} onChange={(e) => setData({...data, total: e.target.value})}/>
        </Form.Group>

        <Button type='submit' className='mt-3'>Submit</Button>
      </Form>
    </div>
  )
}

export default UpdateRent
