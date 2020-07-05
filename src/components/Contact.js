import React from "react";
import MyForm from "./MyForm.js";
import ParticleBGBHW from "./ParticleBGBHW";
import "../styles/contact.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <Container id='contact' fluid>
      <Row className='justify-content-center'>
        <Col className='text-center' xs='11' md='9' xl='5'>
          <h2 id='contact-title'>Contact me</h2>

          <p id='contact-text'>
            I am interested in hearing about job proposals, if you have other
            request or question, don’t hesitate to contact me using below form
            either..
          </p>
        </Col>
      </Row>
      <MyForm />
      <ParticleBGBHW />
    </Container>
  );
}
