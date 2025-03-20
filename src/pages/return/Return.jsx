import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Return = () => {
    const [carReturns, setCarReturns] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('/return')
            
            setCarReturns(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/return/${id}`)

            console.log(response.data)

            fetchData()
        } catch(error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Returns</h1>

      <div className="d-flex justify-content-md">
              <Link to={'/return/create'} variant='primary'>
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
                <th>penalties_name</th>
                <th>date_borrow</th>
                <th>date_return</th>
                <th>penalties_total</th>
                <th>discount</th>
                <th>total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {carReturns.map((carReturn) => (
            <tr key={carReturn.id}>
                <td>{carReturn.register.name}</td>
                <td>{carReturn.car.name_car}</td>
                <td>{carReturn.penalties.penalties_name}</td>
                <td>{carReturn.date_borrow}</td>
                <td>{carReturn.date_return}</td>
                <td>{carReturn.penalties_total}</td>
                <td>{carReturn.discount}</td>
                <td>{carReturn.total}</td>
                <td className='d-flex flex-row gap-2'>
                    <Button variant='danger' onClick={() => handleDelete(carReturn.id)}>delete</Button>
                    <Button variant='warning' as={Link} to={`/return/edit/${carReturn.id}`}>Edit</Button>
                </td>
            </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Return
