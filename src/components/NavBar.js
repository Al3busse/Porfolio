import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";
import avatar from "../svg/avatar.webp";

export default function NavBar() {
  function overflowShow() {
    document.body.style.overflowY = "auto";
  }

  function overflowHide() {
    document.body.style.overflowY = "hidden";
  }
  return (
    <Navbar
      collapseOnSelect
      expand='sm'
      variant='dark'
      id='main-navbar'
      fixed='top'
    >
      <Navbar.Brand
        id='avatar-name'
        to='/'
        as={Link}
        href='/'
        onClick={overflowHide}
      >
        <img
          id='avatar'
          style={{ borderRadius: "50%" }}
          alt=''
          src={avatar}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{" "}
        Alejandro Busse
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/' href='/' onClick={overflowHide}>
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/about'
            href='/about'
            onClick={overflowShow}
            style={{ minWidth: "5.5rem" }}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/projects'
            href='/projects'
            onClick={overflowShow}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/contact'
            href='/contact'
            onClick={overflowShow}
          >
            Contact
          </Nav.Link>
          <Navbar.Text style={{ textAlign: "right", paddingRight: "5px" }}>
            <button
              id='switchL'
              title='This feature is under development'
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <img
                src={require("../svg/switch-en.png")}
                alt='switch language'
                height='22px'
                width='auto'
              ></img>
            </button>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
