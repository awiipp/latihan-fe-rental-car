import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateReturn = () => {
    const [registers, setRegisters] = useState([])
    const [cars, setCars] = useState([])
    const [penalties, setPenalties] = useState([])
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    const fetchData = async () => {
        try {
            const response = await axios.get(`/return/${id}`)

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
      fetchData()
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
        <h1>Update Return</h1>
  
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>id_tenant</Form.Label>
            <Form.Select name='id_tenant' value={data.id_tenant} onChange={(e) => setData({...data, id_tenant: e.target.value})}>
              {registers.map((tenant) => (
                <option value={tenant.id} key={tenant.id}>{tenant.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>id_car</Form.Label>
            <Form.Select name='id_car' value={data.id_car} onChange={(e) => setData({...data, id_car: e.target.value})}>
              {cars.map((car) => (
                <option value={car.id} key={car.id}>{car.name_car}</option>
              ))}
            </Form.Select>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>id_penalties</Form.Label>
            <Form.Select name='id_penalties' value={data.id_penalties} onChange={(e) => setData({...data, id_penalties: e.target.value})}>
              {penalties.map((penalty) => (
                <option value={penalty.id} key={penalty.id}>{penalty.penalties_name}</option>
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
            <Form.Label>penalties_total</Form.Label>
            <Form.Control type='number' name='penalties_total' value={data.penalties_total} onChange={(e) => setData({...data, penalties_total: e.target.value})}/>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>discount</Form.Label>
            <Form.Control type='number' name='discount' value={data.discount} onChange={(e) => setData({...data, discount: e.target.value})}/>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>total</Form.Label>
            <Form.Control type='number' name='total' value={data.total} onChange={(e) => setData({...data, total: e.target.value})}/>
          </Form.Group>
  
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
}

export default UpdateReturn
