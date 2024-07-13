import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar as RNavbar, Nav as RNav, NavItem as RNavItem, NavLink as RNavLink} from 'react-bootstrap';

function MenuVertical() {
  return (
    <RNavbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <RNav className="mr-auto">
          <RNavItem>
            <RNavLink href="#" className="nav-link">
            Productos
            </RNavLink>
          </RNavItem>

          <RNavItem>
            <RNavLink href="#" className="nav-link">
              Categorías
            </RNavLink>
          </RNavItem>
          
          <RNavItem>
            <RNavLink href="#" className="nav-link">
              Usuarios
            </RNavLink>
          </RNavItem>
          
          <RNavItem>
            <RNavLink href="#" className="nav-link">
              Marcas
            </RNavLink>
          </RNavItem>
          
        </RNav>
      </Navbar.Collapse>
    </RNavbar>
  );
}


export default MenuVertical;