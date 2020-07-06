import React from "react";
import MyForm from "./MyForm.js";
import ParticleBGBHW from "./ParticleBGBHW";
import "../styles/contact.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact(props) {
  return (
    <Container id='contact' fluid>
      <Row className='justify-content-center'>
        <Col className='text-center' xs='11' md='9' xl='5'>
          <h2 id='contact-title'>
            {" "}
            {props.lang === "es" ? "Contacto" : "Contact me"}{" "}
          </h2>

          <p id='contact-text'>
            {" "}
            {props.lang === "es"
              ? "Estoy interesado en escuchar propuestas de trabajo, si tienes otra solicitud o consulta, no dudes en ponerte en contacto conmigo mediante el siguiente formulario."
              : "I am interested in hearing about job proposals, if you have any other request or question, don’t hesitate to contact me using below form either."}
          </p>
        </Col>
      </Row>
      <MyForm lang={props.lang} />
      <ParticleBGBHW />
    </Container>
  );
}
