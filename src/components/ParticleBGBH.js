import React, { Component } from "react";
import "../styles/particleBG.css";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";

var bg = require("../svg/bg.webp");
export class ParticleBGBH extends Component {
  render() {
    return (
      <Container fluid>
        <Particles
          id='particleBG'
          params={{
            background: {
              image: "url(" + bg + ")",
              position: "50% 25%",
              repeat: "no-repeat",
              size: "cover",
            },

            detectRetina: true,
            fpsLimit: 30,

            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: "",
                  parallax: {
                    enable: false,
                    force: 5,
                    smooth: 10,
                  },
                },
                resize: true,
              },

              modes: {
                slow: {
                  factor: 3,
                  radius: 120,
                },
              },
            },
            particles: {
              collisions: {
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "#fff",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true,
                },
              },
              links: {
                enable: false,
              },
              move: {
                speed: 3,
                outMode: "out",
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "top",
                enable: true,
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                  factor: {
                    horizontal: {
                      value: 50,
                      offset: 0,
                    },
                    vertical: {
                      value: 10,
                      offset: 40000,
                    },
                  },
                },
              },
              number: {
                value: 0,
              },
              opacity: {
                animation: {
                  enable: false,
                  minimumValue: 0.5,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: false,
                  minimumValue: 0.5,
                },
                value: 5,
              },
              rotate: {
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                random: false,
                value: 0,
              },
              shadow: {
                blur: 3,
                color: {
                  value: "#fff",
                },
                enable: true,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                animation: {
                  destroy: "min",
                  enable: true,
                  minimumValue: 0.1,
                  speed: 1,
                  startValue: 1.5,
                  sync: true,
                },
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              stroke: {
                color: {
                  value: "#fff",
                },
                width: 2,
                opacity: 1,
              },
            },
            pauseOnBlur: true,
            absorbers: {
              color: {
                value: "#fff",
              },
              opacity: 0,
              size: {
                density: 700,
                random: {
                  enable: false,
                  minimumValue: 35,
                },
                value: 55,
                limit: 55,
              },
              position: {
                x: 48,
                y: 22,
              },
            },
            emitters: {
              direction: "center",
              life: {},
              rate: {
                quantity: 3,
                delay: 0.2,
              },
              size: {
                mode: "percent",
                height: 100,
                width: 100,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
          }}
        />
      </Container>
    );
  }
}

export default ParticleBGBH;
