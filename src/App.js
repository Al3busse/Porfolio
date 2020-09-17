import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import SocialNavBar from "./components/SocialNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";

//const Skills = React.lazy(() => import("./components/Skills"));
//const Home = React.lazy(() => import("./components/Home"));
//const Projects = React.lazy(() => import("./components/Projects"));
//const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  useEffect(() => {
    demoAsyncCall().then(() => setLoadingStatus(false));
  }, []);

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  const [loadingStatus, setLoadingStatus] = useState(true);
  const [language, setLanguage] = useState("es");

  const switchLang = () => {
    language === "es" ? setLanguage("en") : setLanguage("es");
  };

  return loadingStatus === true ? (
    // if your component doesn't have to wait for an async action, remove this block
    <h2 className='loader'>Loading</h2> // render null when app is not ready
  ) : (
    <Container id='App'>
      <NavBar lang={language} switchLang={switchLang} />
      <SocialNavBar lang={language} />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              classNames='animation'
              key={location.key}
              timeout={{ enter: 1200, exit: 1200 }}
            >
              <Switch location={location}>
                <Route
                  exact
                  path='/'
                  component={(props) => <Home {...props} lang={language} />}
                />

                <Route
                  path='/about'
                  component={(props) => <About {...props} lang={language} />}
                />

                <Route
                  path='/projects'
                  component={(props) => <Projects {...props} lang={language} />}
                />

                <Route
                  path='/contact'
                  component={(props) => <Contact {...props} lang={language} />}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Container>
  );
};

export default App;
