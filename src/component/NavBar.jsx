import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../img/logo.png";
import Switch from "react-switch";

class NavBar extends Component {
  render() {
    // let value=(this.props.pass) ? undefined : "";
    return (
      <div>
        {/* <nav id="main-nav">
          <img src={Logo} alt="" />
          <h3 className="navBar-username">Logout</h3>
          <h3 className="navBar-username">{this.props.loginInfo["Role"]}</h3>
        </nav> */}


            <Navbar bg="light" expand="lg" className="nav-bar" fixed="top"  id="main-nav">
        {/* <div className="container"> */}
          <Navbar.Brand id="logo-anchor">
            <img id ="nav-bar-logo"src={Logo} alt="" />
            
            <span id="toggle-switch"><Switch 
    checked={this.props.checked}
    onChange={this.props.handleChange}
    onColor="#404e67"
    onHandleColor="#ffffff"
    handleDiameter={10}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={17}
    width={35}
    className="react-switch"
    id="material-switch"
  /></span>
  </Navbar.Brand>
            
            
           
            
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
          {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a>
            admin
            </a>
            
          </Navbar.Text>
        </Navbar.Collapse> */}
        
          <Navbar.Collapse id="logout-navbar-nav">
            <Nav className="ml-auto">             
              <a  onClick={this.props.onClick} className="navbar-right-content">
                {/* Admin */}
            {this.props.loginInfo["Name"]}

                </a>
              <a onClick={this.props.onLogout} style={{"cursor":"pointer"}}className="navbar-right-content">Log Out</a>
            </Nav>
          </Navbar.Collapse>
        {/* </div> */}
      </Navbar>

{/* <Navbar id="main-nav">
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
  
</Navbar> */}
      </div>
    );
  }
}

export default NavBar;
