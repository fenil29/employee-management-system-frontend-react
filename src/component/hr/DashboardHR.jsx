import React, { Component } from "react";
import "./DashboardHR.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Role from "../Role.jsx";
import NavBar from "../NavBar.jsx";
import RoleForm from "../RoleForm.jsx";
import Position from "../Position.jsx";
import Department from "../Department.jsx";
import Country from "../Country.jsx";
import State from "../State.jsx";
import City from "../City.jsx";
import Company from "../Company.jsx";
import Employee from "../Employee.jsx";
import Salary from "../Salary.jsx";
import LeaveApplicationHR from "./LeaveApplicationHR.jsx";
import NotFound404 from "../NotFound404.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChair,
  faBuilding,
 faUser,
faUserTie,
faRupeeSign,
faFileAlt,
faCity,
faGlobeAmericas,
faPlaceOfWorship,
faArchway,
} from "@fortawesome/free-solid-svg-icons";

function RoleHRF() {
  return <Role />;
}


function PositionF() {
  return <Position />;
}
function DepartmentF() {
  return <Department />;
}
function CountryF() {
  return <Country />;
}
function StateF() {
  return <State />;
}
function CityF() {
  return <City />;
}
function CompanyF() {
  return <Company />;
}
function EmployeeF() {
  return <Employee />;
}
function SalaryF() {
  return <Salary />;
}
function LeaveApplicationHRF() {
  return <LeaveApplicationHR />;
}

// function HRPortalF() {
//   return <HRPortal />;
// }
// function HRProjectBidF() {
//   return <HRProjectBid />;
// }

class DashboardHR extends Component {
  state = {
    redirect: true,
    checked: true 
  };
  handleChange=(checked)=> {
    console.log("switch");
    // var sidebarV = this.refs.sidebar;
    // var sidebarV = React.findDOMNode( this.refs.sidebar);
    // sidebarV.style.disply="none";
    
    if(this.state.checked==true){ 
       // document.getElementById("sidebar").setAttribute("style", "display:none")
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    // document.getElementById("sidebar").setAttribute("style", "display:block");
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            {/* <NavBar loginInfo={this.props.data} /> */}
            <NavBar loginInfo={this.props.data} checked={this.state.checked} handleChange={this.handleChange} onLogout={this.props.onLogout}/>

          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUserTie} className="sidebar-icon" />
                HR
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/hr/employee">
                    <FontAwesomeIcon icon={faUser} className="sidebar-icon" /> 
                    User 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/salary">
                    <FontAwesomeIcon icon={faRupeeSign} className="sidebar-icon" /> 
                    Salary 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/leave-application-hr">
                    <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" /> 
                    Leave Application 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/company">
                    <FontAwesomeIcon icon={faCity} className="sidebar-icon" /> 
                    company 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/role">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Role 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/position">
                    <FontAwesomeIcon icon={faChair} className="sidebar-icon" /> 
                    Position 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/department">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="sidebar-icon"
                    /> 
                    Department 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/country">
                    <FontAwesomeIcon icon={faGlobeAmericas} className="sidebar-icon" /> 
                    Country 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/state">
                    <FontAwesomeIcon icon={faPlaceOfWorship} className="sidebar-icon" /> 
                    State 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/city">
                    <FontAwesomeIcon icon={faArchway} className="sidebar-icon" /> 
                    City 
                  </Link> 
                </li>
                <li>
                 
                </li>
                {/* <li> <a href=""><FontAwesomeIcon icon={faChair} className="sidebar-icon"/> Position</a>   </li> */}
                {/* <li> <a href=""><FontAwesomeIcon icon={faBuilding} className="sidebar-icon"/> Department</a>   </li> */}
                {/* <li> <a href=""><FontAwesomeIcon icon={faDollarSign} className="sidebar-icon"/> Project Bidding</a>   </li> */}
                {/* <li> <a href=""><FontAwesomeIcon icon={faTasks} className="sidebar-icon"/> Portal Master</a>   </li> */}
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleHR/> */}
              <Switch>
                <Route
                  path="/hr/employee"
                  // exact
                  component={EmployeeF}
                />
                <Route
                  path="/hr/salary"
                  exact
                  component={SalaryF}
                />
                <Route
                  path="/hr/company"
                  exact
                  component={CompanyF}
                />
                <Route path="/hr/role" component={RoleHRF} />
                {/* <Route path="/hr/role/form" exact component={RoleFormF} /> */}
                <Route
                  path="/hr/position"
                  exact
                  component={PositionF}
                />
                <Route
                  path="/hr/department"
                  exact
                  component={DepartmentF}
                />
                <Route
                  path="/hr/country"
                  exact
                  component={CountryF}
                />
                <Route
                  path="/hr/state"
                  exact
                  component={StateF}
                />
                <Route
                  path="/hr/city"
                  exact
                  component={CityF}
                />
                <Route
                  path="/hr/leave-application-hr"
                  exact
                  component={LeaveApplicationHRF}
                />
                 {/* <Route
                  path="/hr/portal-master"
                  exact
                  component={HRPortalF}
                /> */}
                 {/* <Route
                  path="/hr/project-bid"
                  exact
                  component={HRProjectBidF}
                /> */}
                {/* <Route
                  exact
                  path="/hr"
                  render={() => <Redirect to="hr/employee" />}
                /> */}
                <Route render={() => <NotFound404/>} />
                
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardHR;
