import React from "react";
import ParticleBGBHW from "./ParticleBGBHW";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../styles/projects.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Masonry from "react-masonry-component";

var projects = [
  {
    nameEN: "Pomodoro Clock",
    nameES: "Reloj Pomodoro",
    descriptionEN:
      "A functional Pomodoro Timer to help improve your productivity.",
    descriptionES:
      "Un functional contador Pomodoro que te puede ayudar a mejorar tu productividad.",
    live_demo: "https://al3busse.github.io/Pomodoro-Clock/",
    code: "https://github.com/Al3busse/Pomodoro-Clock",
    tech_stack: [
      "React-icon.svg",
      "Bootstrap-icon.svg",
      "SASS-icon.svg",
      "Javascript-icon.svg",
      "HTML-icon.svg",
      "CSS-icon.svg",
    ],
    screenshot: require("../sc/pomodoro.webp"),
  },
  {
    nameEN: "Scatterplot Graph",
    nameES: "Grafico de dispersión",
    descriptionEN:
      "A scatterplot graph made with D3js that dynamically renders data gathered with an API.",
    descriptionES:
      "Un gráfico de dispersión hecho con D3js que muestra dinámicamente la información obtenida de un API",
    live_demo: "https://al3busse.github.io/d3js-Scatterplot-Graph/",
    code: "https://github.com/Al3busse/d3js-Scatterplot-Graph",
    tech_stack: [
      "D3js-icon.svg",
      "Javascript-icon.svg",
      "HTML-icon.svg",
      "CSS-icon.svg",
      "API-icon.png",
    ],
    screenshot: require("../sc/scatter.webp"),
  },
  {
    nameEN: "Microservice: URL Shortener",
    nameES: "Microservicio: acortador de URL",
    descriptionEN: "A simple microservice for shortening urls.",
    descriptionES: "Un simple microservicio para acortar URLs.",
    live_demo: "https://al3busse-url-shortener.glitch.me/",
    code: "https://github.com/Al3busse/url-shortener-microservice",
    tech_stack: [
      "Nodejs-icon.svg",
      "MongoDB-icon.svg",
      "Mongoose-icon.png",
      "Express-icon.svg",
      "Javascript-icon.svg",
      "HTML-icon.svg",
      "CSS-icon.svg",
    ],
    screenshot: require("../sc/shorturl.webp"),
  },
  {
    nameEN: "Random Quote Machine",
    nameES: "Máquina de frases al azar",
    descriptionEN:
      "A random quote generator that lets you share some amazing quotes on Twitter and WhatsApp.",
    descriptionES:
      "Una máquina que te permite compatir frases generadas al azar por Twitter y WhatsApp.",
    live_demo: "https://al3busse.github.io/Random-Quote-Machine/",
    code: "https://github.com/Al3busse/Random-Quote-Machine",
    tech_stack: [
      "React-icon.svg",
      "Bootstrap-icon.svg",
      "SASS-icon.svg",
      "Javascript-icon.svg",
      "HTML-icon.svg",
      "CSS-icon.svg",
      "API-icon.png",
    ],
    screenshot: require("../sc/random.webp"),
  },
  {
    nameEN: "Exercise Tracker REST API",
    nameES: "Seguimiento de ejercicios REST API",
    descriptionEN:
      "A REST API microservice that lets you add and track users and their exercises based on dates.",
    descriptionES:
      "Un microservicio REST API que te permite agrega y seguir usuarios y sus ejercicios basados en fechas.",
    live_demo: "https://al3busse-exercise-tracker.glitch.me/",
    code: "https://github.com/Al3busse/exercise-tracker-microservice",
    tech_stack: [
      "Nodejs-icon.svg",
      "MongoDB-icon.svg",
      "Mongoose-icon.png",
      "Express-icon.svg",
      "Javascript-icon.svg",
      "HTML-icon.svg",
      "CSS-icon.svg",
    ],
    screenshot: require("../sc/e-tracker.webp"),
  },
  {
    nameEN: "Drum Machine",
    nameES: "Máquina de sonidos",
    descriptionES:
      "Una simple máquina de sonidos de batería con 2 bancos diferentes.",
    descriptionEN: "A simple drum soundboard with 2 sound banks.",
    live_demo: "https://al3busse.github.io/Drum-Machine/",
    code: "https://github.com/Al3busse/Drum-Machine",
    tech_stack: [
      "React-icon.svg",
      "Bootstrap-icon.svg",
      "Javascript-icon.svg",
      "HTML-icon.svg",
      "CSS-icon.svg",
      "API-icon.png",
    ],
    screenshot: require("../sc/drum.webp"),
  },
];

function tooltipRegex(x) {
  return x.replace(/(-icon.png)|(-icon.svg)/, "");
}

export default function Projects(props) {
  return (
    <Container id='projects' fluid>
      <Row>
        <Col className='text-center'>
          <h2 id='title-projects'>
            {" "}
            {props.lang === "es" ? "Proyectos" : "Projects"}
          </h2>
        </Col>
      </Row>
      <Masonry>
        {projects.map((item) => (
          <Col xs='12' sm='6' md='6' lg='4' key={Math.random()}>
            <Card>
              <div className='image-box'>
                <Card.Img
                  variant='top'
                  src={item.screenshot}
                  className='zoom'
                />
              </div>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  {props.lang === "es" ? item.nameES : item.nameEN}
                </Card.Title>
                <Card.Text>
                  {props.lang === "es"
                    ? item.descriptionES
                    : item.descriptionEN}
                </Card.Text>
              </Card.Body>

              <Row
                className='justify-content-center'
                style={{ marginLeft: "3px", marginRight: "3px" }}
              >
                {item.tech_stack.map((tech) => (
                  <Col xs='auto' className='text-center' key={Math.random()}>
                    <img
                      src={require(`../svg/icons/${tech}`)}
                      alt={tech}
                      className='icon-img'
                      title={tooltipRegex(tech)}
                    ></img>
                  </Col>
                ))}
              </Row>
              <Card.Body style={{ padding: "10px" }}>
                <Row className='justify-content-center '>
                  <Col sm='auto' xs={{ span: 6 }} style={{ padding: "5px" }}>
                    <AwesomeButton href={item.live_demo} target='_blank'>
                      {props.lang === "es" ? "Demostración" : "Live Demo"}
                    </AwesomeButton>
                  </Col>
                  <Col sm='auto' xs={{ span: 3 }} style={{ padding: "5px" }}>
                    <AwesomeButton href={item.code} target='_blank'>
                      {props.lang === "es" ? "Código" : "Code"}
                    </AwesomeButton>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Masonry>
      <ParticleBGBHW />
    </Container>
  );
}
