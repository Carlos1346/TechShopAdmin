import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

const MenuContainer = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #444;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background-color: #444;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  :hover {
    color: #ccc;
  }
`;

const Icon = styled.i`
  font-size: 18px;
  margin-left: 10px;
  color: #fff;
`;

function Example() {
  return (
    <MenuContainer>
      <MenuItem>
        <MenuLink href="#">Productos</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#">Categorías</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#">Usuarios</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#">Marcas</MenuLink>
      </MenuItem>
    </MenuContainer>
  );


  
}

export default Example;