import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonToolBar from 'react-bootstrap/ButtonToolbar'

export default function LocalNavbar(){
    return (<div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Learning Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <NavDropdown title="Courses" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/course/APSC100">APSC100</NavDropdown.Item>
                <NavDropdown.Item href="/course/CHEM302">CHEM302</NavDropdown.Item>
                <NavDropdown.Item href="/course/ELEC272">ELEC272</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Add a course</NavDropdown.Item>
            </NavDropdown>
            </Nav>
                <Button variant="outline-light mr-1 " href='/login'>
                    Login
                </Button>
                <Button variant="light" href='/login'>
                    Sign Up
                </Button>
        </Navbar.Collapse>
        </Navbar>
    </div>)
}