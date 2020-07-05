import React from "react";
import ParticleBGBH from "./ParticleBGBH";
import "../styles/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";

export default function Home(props) {
  function overflowShow() {
    document.body.style.overflowY = "auto";
  }
  return (
    <div>
      <Container id='home' fluid>
        <div id='repulsor'>
          <Row className='home-margin justify-content-center align-items-center h-100'>
            <Col className='text-center' sm='12'>
              {props.lang === "en" ? (
                <h2 id='home-title'>
                  Hi! I'm <span className='wrapper1'>Alejandro</span>,
                  <br /> a <span className='wrapper2'>Web Developer</span>.
                </h2>
              ) : (
                <h2 id='home-title'>
                  {" "}
                  Hola! me llamo{" "}
                  <span
                    className='
                 wrapper1 '
                  >
                    Alejandro
                  </span>
                  , <br /> y soy un{" "}
                  <span className='wrapper2'> Desarrollador Web </span>.
                </h2>
              )}

              <Row>
                <Col
                  xs='12'
                  className='text-center'
                  style={{ marginTop: "2rem" }}
                >
                  <Link to='/projects' href='/projects' onClick={overflowShow}>
                    <AwesomeButton id='cta'>
                      {props.lang === "en"
                        ? "Check out my projects!"
                        : "Conocé mis proyectos!"}
                    </AwesomeButton>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <ParticleBGBH />
      </Container>
    </div>
  );
}
