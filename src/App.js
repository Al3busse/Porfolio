import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";

const Skills = React.lazy(() => import("./components/Skills"));
const Home = React.lazy(() => import("./components/Home"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));

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
        <React.Suspense
          fallback={<h1 style={{ marginTop: "10rem" }}>Loading...</h1>}
        >
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
                    <Route exact path='/' component={Home} />

                    <Route path='/skills' component={Skills} />

                    <Route path='/projects' component={Projects} />

                    <Route path='/contact' component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </React.Suspense>
      </Container>
    );
  }
}
