import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">JOHN DOE</Navbar.Brand>

        {/* Toggle pour mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu de navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Accueil
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Réalisations
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Me contacter
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
