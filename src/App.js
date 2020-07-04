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
      isLoading: true,
    };
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      // if your component doesn't have to wait for an async action, remove this block
      return <h2 className='loader'>Loading</h2>; // render null when app is not ready
    }
    return (
      <Container id='App'>
        <React.Suspense fallback={<h2 className='loader'>Loading</h2>}>
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

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
