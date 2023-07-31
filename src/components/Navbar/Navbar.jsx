import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/Logo.svg";
import "../Navbar/navbar.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="color bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div className="links-container">
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", color: "#F7F3EE" }}
              navbarScroll
            >
              <Nav.Link className="navbar-font" href="#action2">
                En venta
              </Nav.Link>

              <Nav.Link className="navbar-font" href="#">
                Alquiler
              </Nav.Link>

              <Nav.Link className="navbar-font" href="#">
                Agenda tu visita
              </Nav.Link>

              <Nav.Link className="navbar-font" href="#">
                Nuestros servicios
              </Nav.Link>

              <Nav.Link className="navbar-font" href="#">
                Mi perfil
              </Nav.Link>

              <Nav.Link className="navbar-font" href="#">
                Nosotros
              </Nav.Link>

              <Nav.Link className="navbar-font" href="#">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
