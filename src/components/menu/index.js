import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">Elisa Viihde</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-item nav-link" to="/">Channels</Link>
          <Link className="nav-item nav-link" to="/program">Programs</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
