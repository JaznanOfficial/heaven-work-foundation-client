import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './heaven-work.jpg';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='m-0 p-0'>
        <Navbar bg="light" expand="lg" className='align-items-center justify-content-center m-0 p-0'>
        <Container className='mx-1 p-0'>
                    <Navbar.Brand href="#home" className='d-flex align-items-center justify-content-center'>
                    <img
                    alt=""
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-center"
                        /> <h2 className='nav-text m-0 p-0'> HEAVEN WORK</h2>
                    </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end mx-0'>
            <Nav className="align-items-center justify-content-center navigation-bar">
              <Nav.Link href="#home" className='home-link'>Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;