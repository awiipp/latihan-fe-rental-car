import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
    const [registers, setRegisters] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('/register')
            
            setRegisters(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/register/${id}`)

            console.log(response.data)

            fetchData()
        } catch(error) {
            console.log(error.response.data)
        }
    }

  return (
    <div>
      <h1>Register</h1>

      <div className="d-flex justify-content-md">
        <Link to={'/register/create'} variant='primary'>
          <Button>
              Add
          </Button>
        </Link>
      </div>

      <Table>
        <thead>
            <tr>
                <th>no_ktp</th>
                <th>name</th>
                <th>date_of_birth</th>
                <th>email</th>
                <th>phone</th>
                <th>description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {registers.map((register) => (
            <tr key={register.id}>
                <td>{register.no_ktp}</td>
                <td>{register.name}</td>
                <td>{register.date_of_birth}</td>
                <td>{register.email}</td>
                <td>{register.phone}</td>
                <td>{register.description}</td>
                <td className='d-flex flex-row gap-2'>
                    <Button variant='danger' onClick={() => handleDelete(register.id)}>delete</Button>
                    <Button variant='warning' as={Link} to={`/register/edit/${register.id}`}>Edit</Button>
                </td>
            </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Register
