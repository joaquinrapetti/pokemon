import React from "react";
import "./Navegation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { SiPokemon } from "react-icons/si";

const Navegation = () => {
  return (
    <nav>
      <Navbar variant="dark">
        <Container>
          <SiPokemon size={110} style={{ width: "150px" }} />
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link href="#">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pokemon">
              <Nav.Link href="#">Pokemon Info</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link href="#">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link href="#">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navegation;
