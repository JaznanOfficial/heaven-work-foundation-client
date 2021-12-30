import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import logo from "./heaven-work.jpg";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div>
            <ScrollToTop smooth top="200" color="#25B561" />
            <Navbar bg="light" expand="lg" className="align-items-center justify-content-center">
                <Container className="mx-1 p-0">
                    <Navbar.Brand
                        href="#home"
                        className="d-flex align-items-center justify-content-between"
                    >
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-center"
                        />{" "}
                        <h2 className="nav-text m-0 p-0"> HEAVEN WORK</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mx-0">
                        <Nav className="align-items-center justify-content-center navigation-bar">
                            <Link to="/" className="home-link ms-1">
                                {" "}
                                <strong className="text-success">Home</strong>{" "}
                            </Link>
                            <Link to="donation" className="ms-1">
                                Donation
                            </Link>

                            <Link to="about">About Us</Link>

                            <Link to="admin" className="ms-1">
                                Admin
                            </Link>
                            <Button variant="outline-success" className="mx-2">
                                {" "}
                                <strong>Donate Now</strong>{" "}
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <MessengerCustomerChat pageId="108379624660473" appId="1591609297868504"/>
        </div>
    );
};

export default Navigation;
