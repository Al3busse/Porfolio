import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
                classNames='animation'
                key={location.key}
                timeout={{ enter: 1200, exit: 1200 }}
              >
                <Switch location={location}>
                  <Route exact path='/' render={Home} />
                  <Route path='/skills' render={Skills} />
                  <Route path='/projects' render={Projects} />
                  <Route path='/contact' render={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Container>
    );
  }
}
