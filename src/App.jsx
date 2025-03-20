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
import CreateRent from './pages/rent/CreateRent'
import UpdateRent from './pages/rent/UpdateRent'
import CreatePenalties from './pages/penalties/CreatePenalties'
import UpdatePenalties from './pages/penalties/UpdatePenalties'
import CreateReturn from './pages/return/CreateReturn'
import UpdateReturn from './pages/return/UpdateReturn'
import UpdateCar from './pages/car/UpdateCar'
import CreateCar from './pages/car/CreateCar'

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
              <Route path='/car/create' element={<CreateCar/>}/>
              <Route path='/car/edit/:id' element={<UpdateCar/>}/>

              <Route path='/rent' element={<Rent/>}/>
              <Route path='/rent/create' element={<CreateRent/>}/>
              <Route path='/rent/edit/:id' element={<UpdateRent/>}/>

              <Route path='/penalties' element={<Penalties/>}/>
              <Route path='/penalties/create' element={<CreatePenalties/>}/>
              <Route path='/penalties/edit/:id' element={<UpdatePenalties/>}/>

              <Route path='/return' element={<Return/>}/>
              <Route path='/return/create' element={<CreateReturn/>}/>
              <Route path='/return/edit/:id' element={<UpdateReturn/>}  />
            </Route>
          </Routes>

          </Container>
      </BrowserRouter>
    </>
  )
}

export default App
