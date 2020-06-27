import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "english",
    };
  }

  render() {
    return (
      <Container id='App'>
        <NavBar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                classNames='spin'
                key={location.key}
                timeout={1501}
              >
                <Switch location={location}>
                  <Route exact path='/Portfolio/' render={Home} />
                  <Route path='/Portfolio/skills' render={Skills} />
                  <Route path='/Portfolio/projects' render={Projects} />
                  <Route path='/Portfolio/contact' render={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Container>
    );
  }
}
