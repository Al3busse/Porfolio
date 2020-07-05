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
    name: "Pomodoro Clock",
    description:
      "A functional Pomodoro Timer to help improve your productivity.",
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
    name: "Scatterplot Graph",
    description:
      "A scatterplot graph made with D3js that dynamically renders data gathered with an API.",
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
    name: "Microservice: URL Shortener",
    description: "A simple microservice for shortening urls.",
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
    name: "Random Quote Machine",
    description:
      "A random quote generator that lets you share some amazing quotes on Twitter and WhatsApp.",
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
    name: "Exercise Tracker REST API",
    description:
      "A REST API microservice that lets you track users and exercises based on dates.",
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
    name: "Drum Machine",
    description: "A simple drum soundboard with 2 sound banks.",
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

export default function Projects() {
  return (
    <Container id='projects' fluid>
      <Row>
        <Col className='text-center'>
          <h2 id='title-projects'>Projects</h2>
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
                  {item.name}
                </Card.Title>
                <Card.Text>{item.description}</Card.Text>
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
                      Live Demo
                    </AwesomeButton>
                  </Col>
                  <Col sm='auto' xs={{ span: 3 }} style={{ padding: "5px" }}>
                    <AwesomeButton href={item.code} target='_blank'>
                      Code
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
