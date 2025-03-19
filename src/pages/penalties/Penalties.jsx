import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

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
                <td>
                    <Button variant='danger' onClick={() => handleDelete(penalty.id)}>delete</Button>
                </td>
            </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Penalties
