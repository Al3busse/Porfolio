import React from "react";
import ParticleBGP from "./ParticleBGP";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/projects.css";

var encuesta = require("../svg/encuesta.png");
var landing = require("../svg/landing-page.png");
var tributo = require("../svg/tributo.png");

export default function Projects() {
  return (
    <Container id='projects' fluid>
      <Row>
        <Col className='text-center'>
          <h2 id='title-projects'>Projects</h2>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm='9' md='8'>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100 cover'
                src={encuesta}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className='slide-title'>First slide label</h3>
                <p className='slide-text'>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 cover'
                src={tributo}
                alt='Second Slide'
              />

              <Carousel.Caption>
                <h3 className='slide-title'>Second slide label</h3>
                <p className='slide-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 cover'
                src={landing}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3 className='slide-title'>Third slide label</h3>
                <p className='slide-text'>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <ParticleBGP />
    </Container>
  );
}
