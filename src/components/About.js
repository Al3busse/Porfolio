import React from "react";
import "../styles/about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ParticleBGBHW from "./ParticleBGBHW";

import bootstrap from "../svg/bootstrap.svg";
import d3js from "../svg/d3js.svg";
import express from "../svg/express.svg";
import git from "../svg/git.svg";
import github from "../svg/github.svg";
import javascript from "../svg/javascript.svg";
import mongodb from "../svg/mongodb.svg";
import nodejs from "../svg/nodejs.svg";
import react from "../svg/react.svg";
import sass from "../svg/sass.svg";
import html5 from "../svg/html5.svg";
import css3 from "../svg/css3.svg";
import mongoose from "../svg/mongoose.png";
import npm from "../svg/npm.svg";

export default function About() {
  return (
    <Container id='skills' fluid>
      <ParticleBGBHW />

      <Row>
        <Col className='text-center'>
          <h2 id='title-skills'> About Me </h2>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col>
          <h3 className='h3-skills'>Front-End</h3>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='3' sm='auto'>
          <img src={html5} alt='html5' className='responsive-img' />
          <p className='p-skills'>HTML5</p>
        </Col>
        <Col xs='3' sm='auto'>
          <img src={css3} alt='css3' className='responsive-img' />
          <p className='p-skills'>CSS3</p>
        </Col>

        <Col xs='3' sm='auto'>
          <img src={sass} alt='sass' className='responsive-img' />{" "}
          <p className='p-skills'>Sass</p>
        </Col>
        <Col xs='3' sm='auto'>
          <img src={d3js} alt='d3js' className='responsive-img' />{" "}
          <p className='p-skills'>D3js</p>
        </Col>
        <Col xs='3' sm='auto' className='text-center'>
          <img src={react} alt='react' className='responsive-img' />
          <p className='p-skills'>React</p>
        </Col>
        <Col xs='3' sm='auto' className='text-center'>
          <img src={javascript} alt='javascript' className='responsive-img' />
          <p className='p-skills'>Javascript</p>
        </Col>
        <Col xs='3' sm='auto'>
          <img src={bootstrap} alt='bootstrap' className='responsive-img' />
          <p className='p-skills'>Bootstrap</p>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col>
          <h3 className='h3-skills'>Back-End</h3>
          <Row className='justify-content-center'>
            <Col xs='3' sm='auto'>
              <img src={nodejs} alt='react' className='responsive-img' />
              <p className='p-skills'>Node.js</p>
            </Col>
            <Col xs='3' sm='auto'>
              <img src={express} alt='react' className='responsive-img' />
              <p className='p-skills'> Express</p>
            </Col>
            <Col xs='3' sm='auto'>
              <img src={mongodb} alt='react' className='responsive-img' />
              <p className='p-skills'> MongoDB</p>
            </Col>
            <Col xs='3' sm='auto'>
              <img src={mongoose} alt='react' className='responsive-img' />
              <p className='p-skills'> Mongoose</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className='justify-content-center'>
            <Col>
              <h3 className='h3-skills'>Tools</h3>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs='3' sm='auto'>
              <img src={git} alt='react' className='responsive-img' />
              <p className='p-skills'> Git</p>
            </Col>
            <Col xs='3' sm='auto'>
              <img src={github} alt='react' className='responsive-img' />{" "}
              <p className='p-skills'>Github</p>
            </Col>
            <Col xs='3' sm='auto'>
              <img src={npm} alt='react' className='responsive-img' />
              <p className='p-skills'>NPM</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
