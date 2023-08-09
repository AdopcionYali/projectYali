import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.module.css'


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setErrorMessage('Credenciales inválidas. Por favor, verifica tu número de teléfono y contraseña.')
    setErrorMessage('')
    try {
      const response = await axios.post('http://localhost:8080/login', {
        phoneNumber,
        password,
      })
      setErrorMessage('')
      const token = response.data.token
      localStorage.setItem('token', token)
      window.location.href = '/dashboard'
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data.message)
      setErrorMessage('Credenciales inválidas. Por favor, verifica tu número de teléfono y contraseña.')
    }
  }


  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/logo.svg" alt="Logo" height="30" />
          </a>
        </div>
      </nav>
      <section className='vh-100 vw-100 px-lg-5 d-flex align-items-center justify-content-center'>


        <form
          onSubmit={handleSubmit}
          className='col-10 col-md-6 col-lg-4 col-xl-3 bg-white d-flex flex-column justify-content-between px-4 py-3 rounded-4 shadow'
        >
          
          <h3 className='text-center fs-4 mb-3 w-700'>Iniciar Sesión</h3>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <div className='form-group mb-3'>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Número de teléfono:
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
              Iniciar Sesión
            </button>
            <button type="button" className="btn btn-secondary w-100 mt-3">
              Iniciar sesión con Google
            </button>
        </form>
      </section>

      <footer className="mt-4 text-center">
        <p>© {new Date().getFullYear()} Tu Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Login