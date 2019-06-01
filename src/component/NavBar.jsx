import React, { Component } from "react";
import "./NavBar.css";
import Logo from "../img/logo.png";

class NavBar extends Component {
  render() {
    // let value=(this.props.pass) ? undefined : "";
    return (
      <div>
        <nav id="main-nav">
          <img src={Logo} alt="" />
          <h3 className="navBar-username">Logout</h3>
          <h3 className="navBar-username">{this.props.loginInfo["Role"]}</h3>
        </nav>
      </div>
    );
  }
}

export default NavBar;
