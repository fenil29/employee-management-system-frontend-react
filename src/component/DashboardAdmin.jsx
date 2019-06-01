import React, { Component } from "react";
import "./DashboardAdmin.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AdminRole from "./AdminRole.jsx";
import NavBar from "./NavBar.jsx";
import AdminRoleForm from "./AdminRoleForm.jsx";
import AdminPosition from "./AdminPosition.jsx";
import AdminDepartment from "./AdminDepartment.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersCog,
  faUsers,
  faChair,
  faBuilding,
  faDollarSign,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

function RoleAdminF() {
  return <AdminRole />;
}
function AdminRoleFormF() {
  return <AdminRoleForm />;
}

function AdminPositionF() {
  return <AdminPosition />;
}
function AdminDepartmentF() {
  return <AdminDepartment />;
}

class DashboardAdmin extends Component {
  render() {
    return (
      <Router>
        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar loginInfo={this.props.data} />
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
                Admin
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/admin/role">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />{" "}
                    Role{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/admin/position">
                    <FontAwesomeIcon icon={faChair} className="sidebar-icon" />{" "}
                    Position{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/admin/department">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="sidebar-icon"
                    />{" "}
                    Department{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/admin/project-bidding">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="sidebar-icon"
                    />{" "}
                    Project Bidding{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/admin/portal-master">
                    <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />{" "}
                    Portal Master{" "}
                  </Link>{" "}
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
              {/* <RoleAdmin/> */}
              <Route path="/admin/role" component={RoleAdminF} />
              {/* <Route path="/admin/role/form" exact component={AdminRoleFormF} /> */}
              <Route path="/admin/position" exact component={AdminPositionF} />
              <Route
                path="/admin/department"
                exact
                component={AdminDepartmentF}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardAdmin;
