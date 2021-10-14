import React from 'react';
import { Col, Container, Navbar, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
const Header = () => {
  let History = useHistory()
  const handleLogOut = () => {
    localStorage.removeItem('token');
    History.push("/");

  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">T M S</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">


          </Nav>
          <Nav>

            <Button className='mx-auto' as={Col} variant="dark" onClick={handleLogOut}>Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
export default Header;