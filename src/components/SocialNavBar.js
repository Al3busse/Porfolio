import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Navbar from "react-bootstrap/Navbar";
import CV from "../cv/Alejandro Busse - EN.pdf";

import "../styles/socialnavbar.css";

export default function SocialNavBar() {
  return (
    <Navbar fixed='bottom'>
      <AwesomeButtonSocial
        type='linkedin'
        size='icon'
        target='_blank'
        href=''
      ></AwesomeButtonSocial>
      <AwesomeButtonSocial
        type='github'
        size='icon'
        target='_blank'
        href='http://www.github.com/Al3busse'
      ></AwesomeButtonSocial>
      <AwesomeButton size='icon' href='mailto:al3busse@gmail.com'>
        <img
          className='icon-svg'
          src={require("../svg/mail.svg")}
          alt='send mail'
        ></img>
      </AwesomeButton>
      <AwesomeButton
        size='icon'
        target='_blank'
        href={CV}
        download='Alejandro Busse - EN.pdf'
      >
        <img
          className='icon-svg icon-cv'
          src={require("../svg/cv.svg")}
          alt='download cv'
        ></img>
      </AwesomeButton>
    </Navbar>
  );
}
