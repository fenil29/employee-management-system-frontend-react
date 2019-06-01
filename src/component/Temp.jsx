import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

export class Temp extends Component {
  render() {
    return (
      // <Navbar >
      // <div className="container">
      //   <Navbar.Brand href="#home">Attendance</Navbar.Brand>
      //   <Navbar.Toggle />
        // <Navbar.Collapse className="justify-content-end">
        //   <Navbar.Text>
        //     <a href="#login">Mark Otto</a> <br/><br/><a href="#login">Logout</a>
        //   </Navbar.Text>
        // </Navbar.Collapse></div>
      // </Navbar>
      <Navbar bg="light" expand="lg" className="nav-bar" fixed="top" >
        <div className="container">
          <Navbar.Brand href="#home">Attendance</Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           
            
          </Navbar.Text>
        </Navbar.Collapse>
        
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">             
              <a href="">Log Out</a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Temp;
