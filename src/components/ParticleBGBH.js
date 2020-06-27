import React, { Component } from "react";
import "../styles/particleBG.css";
import Particles from "react-particles-js";

var bg = require("../svg/bg.jpg");
export class ParticleBGBH extends Component {
  render() {
    return (
      <div>
        <Particles
          id='particleBG'
          params={{
            background: {
              image: "url(" + bg + ")",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },

            detectRetina: true,
            fpsLimit: 30,

            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "slow",
                  parallax: {
                    enable: true,
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
                enable: true,
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
                  speed: 0.3,
                  startValue: 1,
                  sync: true,
                },
                random: {
                  enable: true,
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
                density: 50,
                random: {
                  enable: false,
                  minimumValue: 35,
                },
                value: 25,
                limit: 75,
              },
              position: {
                x: 58.5,
                y: 45.5,
              },
            },
            emitters: {
              direction: "center",
              life: {},
              rate: {
                quantity: 2,
                delay: 0.2,
              },
              size: {
                mode: "percent",
                height: 0,
                width: 100,
              },
              position: {
                x: 50,
                y: 100,
              },
            },
          }}
        ></Particles>
      </div>
    );
  }
}

export default ParticleBGBH;
