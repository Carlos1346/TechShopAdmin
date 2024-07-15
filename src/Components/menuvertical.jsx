import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuHorizontal = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/Dashboard/Inicio">
            <img
              src="https://e7.pngegg.com/pngimages/59/134/png-clipart-chart-computer-icons-statistics-report-elevator-repair-miscellaneous-angle.png" // Reemplaza con el URL de tu logotipo
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
              style={{ marginRight: '10px' }}
            />
            Estadisticas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Dashboard/Estadisticas/Generales">Generales</Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Estadisticas/Ventas">Ventas</Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Estadisticas/Productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Estadisticas/Categorias">Categorías</Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Estadisticas/Usuarios">Usuarios</Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Estadisticas/Marcas">Marcas y proveedores</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <div style={{ width: '100%', padding: '20px' }}>
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default MenuHorizontal;
