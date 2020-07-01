import React from "react";
import ParticleBGBH from "./ParticleBGBH";
import "../styles/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <Container id='home' fluid>
      <Row className='home-margin justify-content-center'>
        <Col className='text-left' sm='6'>
          <h1 id='home-title'>
            Hi! I'm <span className='span-home1'>Alejandro</span>
            ,<br /> a <span className='span-home2'>Web Developer</span>.
          </h1>
        </Col>
      </Row>
      <ParticleBGBH />
    </Container>
  );
}
