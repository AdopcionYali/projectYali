import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Navbar, Nav, Card, Image, Col } from 'react-bootstrap';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // 
    console.log(data);
  };

  return (
    <div style={{ backgroundColor: '#EEEEEE', minHeight: '100vh' }}>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="/logo.svg" alt="Logo" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/login">Iniciar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 72px)' }}>
        <Col xs={10} md={4}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <h3 className="mb-4">Iniciar sesión</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Número de celular" {...register('email', { required: true })} />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" {...register('password', { required: true })} />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Iniciar sesión
                </Button>

                {/* Botón de inicio de sesión con Google */}
                <Button variant="light" type="button" className="w-100">
                  <Image src="/google-icon.png" alt="Google" height="18" className="me-2" />
                  Iniciar sesión con Google
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Container>

      <footer className="mt-4 text-center">
        <p>© {new Date().getFullYear()} Tu Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Login;
