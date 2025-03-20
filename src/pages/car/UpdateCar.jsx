import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCar = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    const fetchData = async () => {
      try {
        const response = await axios.get(`/car/${id}`)

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
        const response = await axios.post(`/car/${id}`, data)
  
        console.log(response.data)
  
        navigate('/car')
      } catch (error) {
        console.log(error.response.data)
      }
    }
    
    return (
      <div>
        <h1>Update Car</h1>
  
        <Form onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Label>no_car</Form.Label>
              <Form.Control type='number' name='no_car' value={data.no_car} onChange={(e) => setData({...data, no_car: e.target.value})} />
          </Form.Group>
          <Form.Group>
              <Form.Label>name_car</Form.Label>
              <Form.Control type='text' name='name_car' value={data.name_car} onChange={(e) => setData({...data, name_car: e.target.value})} />
          </Form.Group>
          <Form.Group>
              <Form.Label>type_car</Form.Label>
              <Form.Control type='text' name='type_car' value={data.type_car} onChange={(e) => setData({...data, type_car: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>year</Form.Label>
              <Form.Control type='number' name='year' value={data.year} onChange={(e) => setData({...data, year: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>seat</Form.Label>
              <Form.Control type='number' name='seat' value={data.seat} onChange={(e) => setData({...data, seat: e.target.value})}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>image</Form.Label>
            <Form.Control type='file' accept='image/*' name='image' onChange={(e) => setData({...data, image: e.target.files})} />
          </Form.Group>
          <Form.Group>
              <Form.Label>total</Form.Label>
              <Form.Control type='number' name='total' value={data.total} onChange={(e) => setData({...data, total: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>price</Form.Label>
              <Form.Control type='number' name='price' value={data.price} onChange={(e) => setData({...data, price: e.target.value})}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>status</Form.Label>
              <Form.Control type='text' name='status'value={data.status} onChange={(e) => setData({...data, status: e.target.value})}/>
          </Form.Group>
  
          <Button type='submit' className='mt-3'>Submit</Button>
        </Form>
      </div>
    )
}

export default UpdateCar
