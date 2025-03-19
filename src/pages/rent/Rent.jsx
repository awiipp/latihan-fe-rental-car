import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Rent = () => {
    const [rents, setRents] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('/rent')
            
            setRents(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/rent/${id}`)

            console.log(response.data)

            fetchData()
        } catch(error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Rent</h1>

      <div className="d-flex justify-content-md">
              <Link to={'/rent/create'} variant='primary'>
                <Button>
                    Add
                 </Button>
              </Link>
      </div>

      <Table>
        <thead>
            <tr>
                <th>tenant_name</th>
                <th>car_name</th>
                <th>date_borrow</th>
                <th>date_return</th>
                <th>down_payment</th>
                <th>discount</th>
                <th>total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {rents.map((rent) => (
            <tr key={rent.id}>
                <td>{rent.register.name}</td>
                <td>{rent.car.name_car}</td>
                <td>{rent.date_borrow}</td>
                <td>{rent.date_return}</td>
                <td>{rent.down_payment}</td>
                <td>{rent.discount}</td>
                <td>{rent.total}</td>
                <td className='d-flex flex-row gap-2'>
                    <Button variant='danger' onClick={() => handleDelete(rent.id)}>delete</Button>
                    <Button variant='warning' as={Link} to={`/rent/edit/${rent.id}`}>Edit</Button>
                </td>
            </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Rent
