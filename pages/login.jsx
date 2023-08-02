import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, Form, Button, Navbar, Nav, Card, Image, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
import styles from '../styles/login.module.css'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(null)
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      if (response.ok) {
        const { token } = await response.json()
        console.log('Token recibido:', token)

        router.push('/signup')
      } else {
        setError('Credenciales inválidas')
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
      setError('Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.')
    }
  }

  return (
    <div className={styles.loginContainer}>
      <Navbar bg='transparent' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            {}
            <img src='/logo.svg' alt='Logo' height='30' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav>
              <Nav.Link href='/login'>Iniciar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: 'calc(100vh - 72px)' }}>
        <Col>
          <Card className={styles.loginCard}>
            <Card.Body>
              <h3 className='mb-4'>Iniciar sesión</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
              {error && <div className='text-danger mb-3'>{error}</div>} 
                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ingrese su email'
                    {...register('email', { required: true })}
                    className={styles.input}
                  />
                </Form.Group>

                <Form.Group controlId='password'>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Ingrese su contraseña'
                    {...register('password', { required: true })}
                    className={styles.input}
                  />
                </Form.Group>

                <Button variant='primary' type='submit' className={`${styles.loginButton} w-100 mb-3`}>
                  Iniciar sesión
                </Button>

                <Button variant='light' type='button' className={`${styles.loginButton} w-100`}>
                  <Image src='/google-icon.png' alt='Google' height='18' className='me-2' />
                  Iniciar sesión con Google
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Container>

      <footer className='mt-4 text-center'>
        <p>© {new Date().getFullYear()} Tu Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Login
