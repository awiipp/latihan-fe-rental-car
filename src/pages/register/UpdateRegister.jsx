import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateRegister = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    const fetchData = async () => {
      try {
        const response = await axios.get(`/register/${id}`)

        setData(response.data)
      } catch (error) {
        console.log(error.response.data)
      }
    }

    useEffect(() => {
      fetchData()
    },[])

    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const data = new FormData(e.target)

      data.append('_method', 'PUT')
  
      try {
        const response = await axios.post(`/register/${id}`, data)
  
        console.log(response.data)
  
        navigate('/register')
      } catch (error) {
        console.log(error.response.data)
      }
    }
    
    return (
      <div>
        <h1>Update Register</h1>
  
        <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>no ktp</Form.Label>
              <Form.Control type='number' name='no_ktp' value={data.no_ktp} onChange={(e) => setData({...data, no_ktp: e.target.value})} />
          </Form.Group>
          <Form.Group>
              <Form.Label>name</Form.Label>
              <Form.Control type='text' name='name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
          </Form.Group>
          <Form.Group>
              <Form.Label>date_of_birth</Form.Label>
              <Form.Control type='date' name='date_of_birth' value={data.date_of_birth} onChange={(e) => setData({...data, date_of_birth: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control type='email' name='email'value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>password</Form.Label>
              <Form.Control type='password' name='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>phone</Form.Label>
              <Form.Control type='number' name='phone' value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control as='textarea' name='description'value={data.description} onChange={(e) => setData({...data, description: e.target.value})}/>
          </Form.Group>
  
          <Button type='submit' className='mt-3'>Submit</Button>
        </Form>
      </div>
    )
}

export default UpdateRegister
