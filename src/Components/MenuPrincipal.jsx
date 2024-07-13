import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

const Example = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://w7.pngwing.com/pngs/257/925/png-transparent-desktop-computers-personal-computer-computer-icons-computer-monitors-computer-rectangle-computer-computer-monitor-accessory-thumbnail.png" // Reemplaza con el URL de tu logotipo
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            TechShop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/catalog">Catalogo</Nav.Link>
              <Nav.Link as={Link} to="/questionary">¡Crea tu mejor opcion!</Nav.Link>
              <Nav.Link as={Link} to="/login">Iniciar sesion</Nav.Link>
              <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-4"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <Nav>
              <Nav.Link as={Link} to="/car">Carrito</Nav.Link>
              <Nav.Link as={Link} to="/ListWish">♥</Nav.Link>
              <NavDropdown title="Perfil" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Ver Perfil
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/status">
                  Mis compras
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/car">
                  Carrito de compras
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  <Button variant="outline-danger">Cerrar Sesión</Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Container>
          <Outlet />
        </Container>
      </section>
    </>
  );
};

export default Example;