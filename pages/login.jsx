import React, { useState } from 'react'
import 'dotenv/config'
import axios from 'axios'
import "../styles/Home.module.css"
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { push } = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        phoneNumber: `+52${phoneNumber}`,
        password,
      })
      setErrorMessage('')
      const token = await response.data.token
      const userDataString = atob(token.split('.')[1])
      const userDataJson = JSON.parse(userDataString)
      const role = userDataJson.role
      localStorage.setItem('token', token)

      if (role === 'rescatist') push('/dashboard/rescatist')
      if (role === 'adopter') push('/dashboard/adopter')
      if (role === 'admin') push('/dashboard/admin')
      
    } catch (error) {
      setErrorMessage(
        'Credenciales inválidas. Por favor, verifica tu número de teléfono y contraseña.',
      )
    }
  }

  return (
    <>
      <Head>
        <title>Yali</title>
        <meta name='description' content='Adopción de mascotas' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Navbar />

      <section className='vh-100 vw-100 px-lg-5 d-flex align-items-center justify-content-center'>
        <form
          onSubmit={handleSubmit}
          className='col-10 col-md-6 col-lg-4 col-xl-3 bg-white d-flex flex-column justify-content-between px-4 py-3 rounded-4 shadow'
        >
          <h3 className='text-center fs-4 mb-3 w-700'>Iniciar Sesión</h3>
          {errorMessage && (
            <div className='alert alert-danger'>{errorMessage}</div>
          )}
          <div className='form-group mb-3'>
            <div className='mb-3'>
              <label htmlFor='phoneNumber' className='form-label'>
                Número de teléfono:
              </label>
              <input
                type='text'
                className='form-control'
                id='phoneNumber'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Contraseña:
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type='submit' className='btn btn-primary w-100'>
            Iniciar Sesión
          </button>
        </form>
      </section>

      <Footer />
    </>
  )
}

export default Login
