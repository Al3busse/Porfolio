import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Navbar from "react-bootstrap/Navbar";
import CVEN from "../cv/Alejandro Busse - EN.pdf";
import CVES from "../cv/Alejandro Busse - ES.pdf";
import "../styles/socialnavbar.css";
import  cvsvg from "../svg/cv.svg";
import  mailsvg from "../svg/mail.svg";

export default function SocialNavBar(props) {
  return (
    <Navbar fixed='bottom'>
      <AwesomeButtonSocial
        type='linkedin'
        size='icon'
        target='_blank'
        href='https://www.linkedin.com/in/al3busse/'
        title={
          props.lang === "es" ? "Visitar mi Linkedin" : "Visit my Linkedin"
        }
      ></AwesomeButtonSocial>
      <AwesomeButtonSocial
        type='github'
        size='icon'
        target='_blank'
        href='http://www.github.com/Al3busse'
        title={props.lang === "es" ? "Visitar mi Github" : "Visit my Github"}
      ></AwesomeButtonSocial>
      <AwesomeButton
        size='icon'
        href='mailto:al3busse@gmail.com'
        title={props.lang === "es" ? "Enviar un email " : "Send email"}
      >
        <img
          className='icon-svg'
          src={mailsvg}
          alt='send mail'
        ></img>
      </AwesomeButton>
      <AwesomeButton
        size='icon'
        target='_blank'
        href={props.lang === "es" ? CVES : CVEN}
        download={
          props.lang === "es"
            ? "Alejandro Busse - ES.pdf"
            : "Alejandro Busse - EN.pdf"
        }
        title={props.lang === "es" ? "Bajar mi CV" : "Download my CV"}
      >
        <img
          className='icon-svg icon-cv'
          src={cvsvg}
          alt='download cv'
        ></img>
      </AwesomeButton>
    </Navbar>
  );
}
