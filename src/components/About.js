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

export default function About(props) {
  return (
    <Container id='skills' fluid>
      <ParticleBGBHW />

      <Row>
        <Col className='text-center'>
          <h2 id='title-skills'>
            {props.lang === "es" ? "Sobre mí" : "About me"}
          </h2>
        </Col>
      </Row>
      <Row>
        <Row className='justify-content-center align-items-center'>
          <Col id='card-about' className='text-left' xs='12' md='4'>
            {props.lang === "es" ? (
              <p>
                Soy un Desarrollador Web, autodidacta, que retomó una pasión que
                creía perdida, la programación, soy una persona independiente,
                motivada y curiosa, que siempre esta aprendiendo algo nuevo o
                mejorando viejos proyectos. <br />
                <br />
                Estoy en búsqueda de un puesto que me permita utilizar mi
                principal habilidad: resolver problemas, que ponga a prueba mis
                conocimientos y los expanda. Me gustaría formar parte de un
                equipo y crecer profesionalmente.
                <br />
                <br />
                Algunos de mis intereses son la epistemología, la
                automatización, ciencia y tecnología en la agricultura. Me
                encantan las actividades al aire libre como pescar y hasta tengo
                mi propia huerta.
              </p>
            ) : (
              <p>
                Im a self-taught Web Developer, who returned to a passion that i
                believed lost, programming, I am an independent, motivated and
                curious person, who is always learning something new or
                improving old projects. <br />
                <br />
                Im looking for a position that allows me to use my main skill:
                solving problems, that tests my knowledge and expands it. I
                would like to be part of a team and grow professionally."
                <br />
                <br />
                Some of my interests are epistemology, automatization, science
                and technology in agriculture. I love outdoor activities like
                fishing and i even have my own vegetable garden.
              </p>
            )}
          </Col>

          <Col xs='12' md='8'>
            <Row className='justify-content-center'>
              <Col>
                <h4 className='h4-skills'>Front-End</h4>
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
                <img
                  src={javascript}
                  alt='javascript'
                  className='responsive-img'
                />
                <p className='p-skills'>Javascript</p>
              </Col>
              <Col xs='3' sm='auto'>
                <img
                  src={bootstrap}
                  alt='bootstrap'
                  className='responsive-img'
                />
                <p className='p-skills'>Bootstrap</p>
              </Col>
            </Row>

            <Row className='justify-content-center'>
              <Col>
                <h4 className='h4-skills'>Back-End</h4>
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
                    <img
                      src={mongoose}
                      alt='react'
                      className='responsive-img'
                    />
                    <p className='p-skills'> Mongoose</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row className='justify-content-center'>
                  <Col>
                    <h4 className='h4-skills'>
                      {props.lang === "es" ? "Herramientas" : "Tools"}
                    </h4>
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
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
