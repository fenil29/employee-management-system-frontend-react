import React, { Component } from "react";
import "./Role.css";
import axios from "axios";
import RoleTable from "./RoleTable.jsx";
import RoleForm from "./RoleForm.jsx";
import RoleFormEdit from "./RoleFormEdit.jsx";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

// function RoleTableF() {
//   return <RoleTable/>;
// }
// function RoleFormF() {
//   return  <RoleForm onRoleSubmit={handleRoleSubmit}/>;
// }

// function handleRoleSubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class Role extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {}
  };

  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      //  <Router>
      <React.Fragment>
        {this.state.table ? (
          this.state.editForm ? (
            <RoleFormEdit
              onRoleEditUpdate={this.handleRoleEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <RoleTable
                onAddRole={this.handleAddRole}
                onEditRole={this.handleEditRole}
              />
            )
        ) : (
            <RoleForm
              onRoleSubmit={this.handleRoleSubmit}
              onFormClose={this.handleFormClose}
            />
          )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/role/table" exact component={RoleTable} /> */}
        {/* <Route path="/admin/role/form" exact component={() => <RoleForm onRoleSubmit={this.handleRoleSubmit} />} /> */}

        {/* <RoleTable/> */}
      </React.Fragment>

      //  </Router>
    );
  }
  handleRoleSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      CompanyID: event.target[0].value,
      RoleName: event.target[1].value
    };
    //  let body= "CompanyID=" + event.target[0].value + "&Role=" + event.target[1].value;
    //  let body= "FenilKaneria";
    axios
      .post(process.env.REACT_APP_API_URL + "/api/role", body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });
    // this.setState({ loading: true });
    // this.login(event.target[0].value, event.target[1].value);
    // event.target.reset();
  };
  handleAddRole = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditRole = e => {
    console.log(e);
    console.log("clicked6");
    this.setState({ editForm: true });
    this.setState({ editData: e });
  };
  handleFormClose = () => {
    console.log("clicked1");
    this.setState({ table: true });
  };
  handleEditFormClose = () => {
    console.log("clicked5");
    this.setState({ editForm: false });
  };
  handleFormClose = () => {
    console.log("clicked1");
    this.setState({ table: true });
  };
  handleRoleEditUpdate = (info, formData1, formData2) => {
    // this.setState({ table: true });
    let body = {
      // ...info,CompanyID:formData1,Role:formData2

      CompanyID: formData1,
      RoleName: formData2,

    };
    console.log("update", body);
    axios
      .put(process.env.REACT_APP_API_URL + "/api/role/" + info["_id"], body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        // this.componentDidMount();
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ editForm: false });
  };
}

export default Role;
