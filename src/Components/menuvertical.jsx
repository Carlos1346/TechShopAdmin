import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuVertical() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar bg="light" expand="lg" className="flex-column vh-100" style={{ position: 'fixed', width: '170px' }}>
        <Container fluid>
          <Nav className="flex-column">
            
            <Nav.Link href="#action/3.1" className="menu-link">Productos</Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link href="#action/3.2" className="menu-link">Categorías</Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link href="#action/3.3" className="menu-link">Usuarios</Nav.Link>
            <div className="menu-divider"></div>
            <Nav.Link href="#action/3.4" className="menu-link">Marcas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        {/* Aquí puedes colocar el contenido principal de tu página */}
        <h1>Contenido Principal</h1>
        <p>Aquí va el contenido de tu aplicación.</p>
      </div>
    </div>
  );
}

export default MenuVertical;

// Agrega estilos CSS en el mismo archivo
const styles = `
  .menu-link {
    padding: 10px 15px;
    transition: background-color 0.3s, color 0.3s;
    font-size: 20px;
  }

  .menu-link:hover {
    background-color: #e9ecef;
    color: #0056b3;
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