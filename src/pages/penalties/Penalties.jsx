import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Penalties = () => {
    const [penalties, setPenalties] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('/penalties')
            
            setPenalties(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/penalties/${id}`)

            console.log(response.data)

            fetchData()
        } catch(error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Penalties</h1>

      <div className="d-flex justify-content-md">
        <Link to={'/penalties/create'} variant='primary'>
          <Button>
              Add
          </Button>
        </Link>
      </div>

      <Table>
        <thead>
            <tr>
                <th>penalties_name</th>
                <th>description</th>
                <th>car_name</th>
                <th>penalties_total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {penalties.map((penalty) => (
            <tr key={penalty.id}>
                <td>{penalty.penalties_name}</td>
                <td>{penalty.description}</td>
                <td>{penalty.car.name_car}</td>
                <td>{penalty.penalties_total}</td>
                <td className='d-flex flex-row gap-2'>
                    <Button variant='danger' onClick={() => handleDelete(penalty.id)}>delete</Button>
                    <Button variant='warning' as={Link} to={`/penalties/edit/${penalty.id}`}>Edit</Button>
                </td>
            </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Penalties
