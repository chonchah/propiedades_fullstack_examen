import React, { PureComponent } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

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
          <Brand><NavLink href="/">Habi</NavLink> </Brand>
          <Toggle aria-controls="responsive-navbar-nav" />
          <Collapse id="responsive-navbar-nav" className="justify-content-end">
            
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
