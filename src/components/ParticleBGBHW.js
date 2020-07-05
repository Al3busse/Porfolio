import React, { Component } from "react";
import "../styles/particleBG.css";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";

var bg = require("../svg/bg.webp");
export class ParticleBGBHW extends Component {
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
            backgroundMask: {
              cover: {
                color: {
                  value: "#111",
                },
                opacity: 1,
              },
              enable: true,
            },

            detectRetina: true,
            fpsLimit: 30,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onDiv: [
                  {
                    elementId: "repulsor",
                    enable: true,
                    mode: "repulse",
                    type: "circle",
                  },
                  {
                    elementId: "cta",
                    enable: false,
                    mode: "repulse",
                    type: "circle",
                  },
                ],
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  duration: 2,
                  opacity: 1,
                  size: 35,
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 5,
                  speed: 0.5,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
              },
            },
            particles: {
              collisions: {
                enable: true,
                mode: "bounce",
              },
              color: {
                value: "#ffffff",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true,
                },
              },
              links: {
                blink: false,
                color: {
                  value: "#ffffff",
                },
                consent: false,
                distance: 130,
                enable: true,
                opacity: 1,
                shadow: {
                  blur: 5,
                  color: {
                    value: "lime",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                },
                width: 3,
                warp: false,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "top-left",
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
                outMode: "out",
                random: false,
                speed: 3,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                  factor: 1000,
                },
                limit: 0,
                value: 60,
              },
              opacity: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 1,
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
                blur: 0,
                color: {
                  value: "#000000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {
                  polygon: {
                    fill: true,
                    close: true,
                    sides: 5,
                  },
                  star: {
                    fill: true,
                    close: true,
                    sides: 5,
                  },
                },
                type: "circle",
              },
              size: {
                animation: {
                  destroy: "none",
                  enable: true,
                  minimumValue: 1,
                  speed: 25,
                  startValue: "max",
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 5,
                },
                value: 10,
              },
              stroke: {
                color: {
                  value: "#000000",
                },
                width: 0,
                opacity: 1,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
            },
            pauseOnBlur: true,
          }}
        />
      </Container>
    );
  }
}

export default ParticleBGBHW;
