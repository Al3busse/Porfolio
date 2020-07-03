import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AwesomeButton } from "react-awesome-button";
import "../styles/socialnavbar.css";

export default function SocialNavBar() {
  return (
    <Container id='social-nav'>
      <Row>
        <Col xs='auto'>
          <AwesomeButton>a</AwesomeButton>
          <AwesomeButton>a</AwesomeButton>
          <AwesomeButton>a</AwesomeButton>
          <AwesomeButton>a</AwesomeButton>
        </Col>
      </Row>
    </Container>
  );
}
