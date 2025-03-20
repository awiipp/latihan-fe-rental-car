import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Car = () => {
    const [cars, setCars] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('/car')
            
            setCars(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/car/${id}`)

            console.log(response.data)

            fetchData()
        } catch(error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Car</h1>

      <div className="d-flex justify-content-md">
              <Link to={'/car/create'} variant='primary'>
                <Button>
                    Add
                 </Button>
              </Link>
      </div>

      <Table>
        <thead>
            <tr>
                <th>name_car</th>
                <th>type_car</th>
                <th>year</th>
                <th>seat</th>
                <th>image</th>
                <th>total</th>
                <th>price</th>
                <th>status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {cars.map((car) => (
            <tr key={car.id}>
                <td>{car.name_car}</td>
                <td>{car.type_car}</td>
                <td>{car.year}</td>
                <td>{car.seat}</td>
                <td>
                    <img src={`http://127.0.0.1:8000/storage/${car.image}`} width={'60px'} alt="" />
                </td>
                <td>{car.total}</td>
                <td>{car.price}</td>
                <td>{car.status}</td>
                <td className='d-flex flex-row gap-2'>
                    <Button variant='danger' onClick={() => handleDelete(car.id)}>delete</Button>
                    <Button variant='warning' as={Link} to={`/car/edit/${car.id}`}>Edit</Button>
                </td>
            </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Car
