import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topbar from './components/Topbar'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Login from './pages/Login'
import AuthLayout from './layouts/AuthLayout'
import Register from './pages/register/Register'
import Car from './pages/car/Car'
import Rent from './pages/rent/Rent'
import Penalties from './pages/penalties/Penalties'
import Return from './pages/return/Return'
import CreateRegister from './pages/register/CreateRegister'
import UpdateRegister from './pages/register/UpdateRegister'

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
          <Container>
            
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route element={<AuthLayout/>}>
              <Route path='/' element={<Home/>}/>

              <Route path='/register' element={<Register/>}/>
              <Route path='/register/create' element={<CreateRegister/>}/>
              <Route path='/register/edit/:id' element={<UpdateRegister/>}/>

              <Route path='/car' element={<Car/>}/>
              <Route path='/rent' element={<Rent/>}/>
              <Route path='/penalties' element={<Penalties/>}/>
              <Route path='/return' element={<Return/>}/>
            </Route>
          </Routes>

          </Container>
      </BrowserRouter>
    </>
  )
}

export default App
