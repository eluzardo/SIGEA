import { Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';

export default function Navegacion() {
  return (
    <Navbar collapseOnSelect expand="xxl" variant="dark" bg="dark">
      <NavbarBrand as={NavLink} to="/">
        Sigea
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav.Link as={NavLink} to="/carreras">
          Carreras
        </Nav.Link>
        <Nav.Link as={NavLink} to="/planes-de-estudio">
          Planes de estudio
        </Nav.Link>
        <Nav.Link as={NavLink} to="/materias">
          Materias
        </Nav.Link>
      </NavbarCollapse>
    </Navbar>
  );
}
