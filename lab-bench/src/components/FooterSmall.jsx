import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css'

const Footer = () => {
  return (
    <Container fluid className="footer-small">
      <Container className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Col>
            <p> links to socials? </p>
          <Col md="6">
          </Col>
        </Row>
      </Container>

      <div className="text-center">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a>something </a>
        </Container>
      </div>
    </Container>
  );
}

export default Footer;