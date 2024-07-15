import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

const MenuPrincipal = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand as={Link} to="/Dashboard/Inicio">
              <img
                src="https://w7.pngwing.com/pngs/257/925/png-transparent-desktop-computers-personal-computer-computer-icons-computer-monitors-computer-rectangle-computer-computer-monitor-accessory-thumbnail.png" // Reemplaza con el URL de tu logotipo
                alt="Logo"
                height="30"
                className="d-inline-block align-top"
                style={{ marginLeft: '30px' }}
              />{" "}
              TechShop
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Dashboard/Estadisticas/Generales">
                Estadisticas
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Altas/Productos">
                Altas y bajas
              </Nav.Link>
             
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
              <NavDropdown title="Perfil" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Ver Perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  <Button as={Link} to="/" variant="outline-danger">Cerrar Sesión</Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <section>
        <div style={{ width: "100%" }}>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MenuPrincipal;
