import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthContextProvider from './context/AuthContext.jsx'
import axios from 'axios'

// config axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/a24'
axios.defaults.headers['Accept'] = 'application/json'
axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`

  return config
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  </StrictMode>,
)
