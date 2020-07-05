// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import "../styles/myform.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Container fluid>
        <form
          onSubmit={this.submitForm}
          action='https://formspree.io/mdowdjql'
          method='POST'
        >
          <Row className='justify-content-center'>
            <Col xs={12} sm={6} xl='3'>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Control
                  type='text'
                  placeholder={
                    this.props.lang === "es" ? "Tu nombre" : "Your name"
                  }
                  name='name'
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} xl='3'>
              <Form.Group controlId='exampleForm.ControlInput2'>
                <Form.Control
                  type='email'
                  placeholder={
                    this.props.lang === "es" ? "Tú correo" : "Your mail"
                  }
                  name='email'
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xl='6'>
              <Form.Group controlId='exampleForm.ControlInput3'>
                <Form.Control
                  type='text'
                  placeholder={this.props.lang === "es" ? "Asunto" : "Subject"}
                  name='subject'
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xl='6'>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Control
                  as='textarea'
                  rows='3'
                  name='message'
                  placeholder={this.props.lang === "es" ? "Mensaje" : "Message"}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col className='text-right ' xl='6'>
              {status === "SUCCESS" ? (
                <p>
                  {" "}
                  {this.props.lang === "es"
                    ? "Mensaje enviado!"
                    : "Message sent!"}
                </p>
              ) : (
                <AwesomeButton
                  className='button-all'
                  id='submit-button'
                  type='primary'
                >
                  {this.props.lang === "es" ? "Enviar" : "Submit"}
                </AwesomeButton>
              )}
              {status === "ERROR" && (
                <p>
                  {" "}
                  {this.props.lang === "es"
                    ? "Ocurrio un error, vuelve a intentarlo por favor."
                    : "An error ocurred. Please try again."}
                </p>
              )}
            </Col>
          </Row>
        </form>
      </Container>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
