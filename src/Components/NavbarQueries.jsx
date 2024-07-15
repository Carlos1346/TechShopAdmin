import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

function NavbarQueries() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar
        bg="light"
        expand="lg"
        className="flex-column vh-100"
        style={{ position: "fixed", width: "160px" }}
      >
        <Container fluid>
          <Nav className="flex-column">
            <p style={{ margin: "5px" }}>Agregar, modificar y eliminar:</p>

            <Nav.Link
              as={Link}
              to="/Dashboard/Altas/Productos"
              className="menu-link"
            >
              Productos
            </Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link
              as={Link}
              to="/Dashboard/Altas/Categorias"
              className="menu-link"
            >
              Categorías
            </Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link
              as={Link}
              to="/Dashboard/Altas/Usuarios"
              className="menu-link"
            >
              Usuarios
            </Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link
              as={Link}
              to="/Dashboard/Altas/Marcas"
              className="menu-link"
            >
              Marcas y provedores
            </Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link
              as={Link}
              to="/Dashboard/Altas/Ordenes"
              className="menu-link"
            >
              Ultimas ordenes
            </Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link
              as={Link}
              to="/Dashboard/Altas/Reseñas"
              className="menu-link"
            >
              Reseñas
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <div style={{ marginLeft: "160px", width: "100%" }}>
        <Outlet />
      </div>
    </div>
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
