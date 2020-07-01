import React from "react";
import ParticleBGP from "./ParticleBGP";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../styles/projects.css";

var projects = [
  {
    name: "Pomodoro Clock",
    description:
      "A functional Pomodoro Timer to help improve your productivity.",
    live_demo: "https://al3busse.github.io/Pomodoro-Clock/",
    code: "https://github.com/Al3busse/Pomodoro-Clock",
    tech_stack: ["React", "Bootstrap", "SASS", "Javascript", "HTML", "CSS"],
    screenshot: require("../sc/pomodoro.webp"),
  },
  {
    name: "Scatterplot Graph",
    description:
      "A scatterplot graph made with D3js that dynamically renders data gathered with an API.",
    live_demo: "https://al3busse.github.io/d3js-Scatterplot-Graph/",
    code: "https://github.com/Al3busse/d3js-Scatterplot-Graph",
    tech_stack: ["D3.js", "Javascript", "API", "HTML", "CSS"],
    screenshot: require("../sc/scatter.webp"),
  },
  {
    name: "Microservice: URL Shortener",
    description: "A simple microservice for shortening urls.",
    live_demo: "https://al3busse-url-shortener.glitch.me/",
    code: "https://github.com/Al3busse/url-shortener-microservice",
    tech_stack: [
      "Node.js",
      "MongoDB",
      "Express",
      "Mongoose",
      "Javascript",
      "HTML",
      "CSS",
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
      "React",
      "Bootstrap",
      "SASS",
      "API",
      "Javascript",
      "HTML",
      "CSS",
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
      "Node.js",
      "MongoDB",
      "Express",
      "Mongoose",
      "Javascript",
      "HTML",
      "CSS",
    ],
    screenshot: require("../sc/e-tracker.webp"),
  },
  {
    name: "Drum Machine",
    description: "A simple drum soundboard with 2 sound banks.",
    live_demo: "https://al3busse.github.io/Drum-Machine/",
    code: "https://github.com/Al3busse/Drum-Machine",
    tech_stack: ["React", "Bootstrap", "API", "Javascript", "HTML", "CSS"],
    screenshot: require("../sc/drum.webp"),
  },
];

function colorPick(x) {
  switch (x) {
    case "HTML":
      return "#E44D26";

    case "CSS":
      return "#1572B6";

    case "SASS":
      return "#CB6699";

    case "D3.js":
      return "#f7974e";

    case "React":
      return "#61DAFB";

    case "Javascript":
      return "#F0DB4F";

    case "Bootstrap":
      return "#5B4282";

    case "Node.js":
      return "#83CD29";

    case "Express":
      return "#fff";

    case "MongoDB":
      return "#439934";

    case "Mongoose":
      return "#880000";

    default:
      return "#fff";
  }
}

export default function Projects() {
  return (
    <Container id='projects' fluid>
      <Row>
        <Col className='text-center'>
          <h2 id='title-projects'>Projects</h2>
        </Col>
      </Row>
      <Row className='justify-content-center'>
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

              <Row className='justify-content-center'>
                {item.tech_stack.map((tech) => (
                  <Col xs='auto' className='text-center' key={Math.random()}>
                    <p
                      style={{
                        color: colorPick(tech),
                        textShadow:
                          "0px 0px 5px black,0px 0px 6px #666,1px 1px 1px" +
                          colorPick(tech),
                      }}
                    >
                      {tech}
                    </p>
                  </Col>
                ))}
              </Row>

              <Card.Body style={{ padding: "10px" }}>
                <Row className='justify-content-center'>
                  <Col
                    sm='auto'
                    xs={{ span: 6, offset: 1 }}
                    style={{ padding: "5px" }}
                  >
                    <Card.Link href={item.live_demo} target='_blank'>
                      Live Demo
                    </Card.Link>
                  </Col>
                  <Col
                    sm='auto'
                    xs={{ span: 3, offset: 0 }}
                    style={{ padding: "5px" }}
                  >
                    <Card.Link href={item.code} target='_blank'>
                      Code
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ParticleBGP />
    </Container>
  );
}
