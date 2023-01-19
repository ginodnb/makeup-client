import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


function Header () {
    return(
        // <h1>hi</h1>
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">MAKEUP API</Navbar.Brand>
      <Nav className="me-auto">
        <Link to={"/About"}>About</Link>
        <Link to={"/Products"}>Products</Link>
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
    </Container>
  </Navbar>
  </>

  )

}

export default Header;