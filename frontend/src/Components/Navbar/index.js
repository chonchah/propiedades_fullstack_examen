import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container , NavDropdown} from "react-bootstrap";

const { Toggle, Collapse, Brand } = Navbar;
const NavLink = Nav.Link;

class NavigationBar extends PureComponent {

  closeSession = () => {
    localStorage.clear()
    window.location = "/"
  }

  render() {

    return (
      <Navbar collapseOnSelect sticky="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Brand><NavLink  href="/" >Habi</NavLink> </Brand>
          <Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Propiedades" id="basic-nav-dropdown">
          <NavDropdown.Item to="/property/create" as={Link}>Nueva propiedad</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
