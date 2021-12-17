import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './heaven-work.jpg';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg" className='align-items-center justify-content-center'>
        <Container className='mx-1 p-0'>
                    <Navbar.Brand href="#home" className='d-flex align-items-center justify-content-between'>
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
              <Nav.Link href="#link">Donation</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                
                <NavDropdown.Item href="#action/3.2">Zakat Projects</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Winter Project</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Summer Project</NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Media" id="basic-nav-dropdown">
               
                <NavDropdown.Item href="#action/3.2">Photos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Videos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Press</NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="About" id="basic-nav-dropdown">
                
                <NavDropdown.Item href="#action/3.2">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Audit Report</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Terms and Condition</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;