import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

function NavbarQueries() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
        <Navbar.Brand as={Link} to="/Dashboard/Inicio">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5581/5581976.png" // Reemplaza con el URL de tu logotipo
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
              style={{ marginRight: '10px' }}
            />
            Administrar
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link as={Link} to="/Dashboard/Altas/Productos" className="menu-link">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Altas/Categorias" className="menu-link">
                Categorías
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Altas/Usuarios" className="menu-link">
                Usuarios
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Altas/Marcas" className="menu-link">
                Marcas y provedores
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Altas/Ordenes" className="menu-link">
                Ultimas ordenes
              </Nav.Link>
              <Nav.Link as={Link} to="/Dashboard/Altas/Reseñas" className="menu-link">
                Reseñas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <div style={{ width: "100%", padding: "20px" }}>
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default NavbarQueries;

// Agrega estilos CSS en el mismo archivo
const styles = `
  .menu-link {
    padding: 10px 10px;
    transition: background-color 0.3s, color 0.3s;
    font-size: 16px;
  }

  .menu-link:hover {
    background-color: #e9ecef;
    color: #0056b3;
    font-size: 17px;
  }

  .menu-divider {
    height: 1px;
    background-color: #dee2e6;
    margin: 5px 0;
    width: 150px;
  }
`;

// Inserta los estilos en el documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
