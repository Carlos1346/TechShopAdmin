import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Navbar as RNavbar, Nav as RNav, NavItem as RNavItem, NavLink as RNavLink} from 'react-bootstrap';
function MenuOpciones() {
  return (
    <RNavbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <RNav className="mr-auto">
          <RNavItem>
            <RNavLink href="#" className="nav-link">
              Órdenes de compra
              <i className="fas fa-shopping-cart ml-2" />
            </RNavLink>
          </RNavItem>
          <RNavItem>
            <RNavLink href="#" className="nav-link">
              Revisión de reseñas de productos
              <i className="fas fa-star ml-2" />
            </RNavLink>
          </RNavItem>
        </RNav>
      </Navbar.Collapse>
    </RNavbar>
  );
}


export default MenuOpciones;