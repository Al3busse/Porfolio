import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";

export default function NavBar() {
  function changeOF() {
    document.body.style.overflowY = "hidden";
    setTimeout(function () {
      document.body.style.overflowY = "auto";
    }, 1500);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand='sm' variant='dark' fixed='top'>
        <Navbar.Brand
          id='avatar-name'
          to='/Portfolio/'
          as={Link}
          href='/Portfolio/'
        >
          <img
            id='avatar'
            style={{ borderRadius: "50%" }}
            alt=''
            src='/avatar.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{" "}
          Alejandro Busse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link
              as={Link}
              to='/Portfolio/'
              href='/Portfolio/'
              onClick={changeOF}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/Portfolio/skills'
              href='/Portfolio/skills'
              onClick={changeOF}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/Portfolio/projects'
              href='/Portfolio/projects'
              onClick={changeOF}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/Portfolio/contact'
              href='/Portfolio/contact'
              onClick={changeOF}
            >
              Contact
            </Nav.Link>
            <Navbar.Text>
              <button
                title='Change language'
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
    </div>
  );
}
