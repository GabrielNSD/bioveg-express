import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
    <style>@import url({'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500&display=swap'});</style>
      <Navbar expand="lg" style={{ background: "#356b47" }}>
        <Navbar.Brand href="/" className="logo" style={{ color: "#FFFF", fontFamily: "Forum" }}>
          BioVeg Express
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
