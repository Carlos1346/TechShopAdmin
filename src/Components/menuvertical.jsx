import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet , Link} from "react-router-dom";

function MenuVertical() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar bg="light" expand="lg" className="flex-column vh-100" style={{ position: 'fixed', width: '160px' }}>
        <Container fluid>
          <Nav className="flex-column">

            <Nav.Link as={Link} to="/Dashboard/Estadisticas/Generales" className="menu-link">Generales</Nav.Link>
            <div className="menu-divider"></div>            
            <Nav.Link as={Link} to="/Dashboard/Estadisticas/Ventas" className="menu-link">Ventas</Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link as={Link} to="/Dashboard/Estadisticas/Productos" className="menu-link">Productos</Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link as={Link} to="/Dashboard/Estadisticas/Productos"className="menu-link">Categorías</Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link as={Link} to="/Dashboard/Estadisticas/Usuarios"className="menu-link">Usuarios</Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link as={Link} to="/Dashboard/Estadisticas/Marcas" className="menu-link">Marcas y proveedores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ marginLeft: '160px', width: '100%' }}>
        
        <Outlet />
      </div>
    </div>
  );
}

export default MenuVertical;

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