import React, { Component } from "react";
import "./AdminRole.css";
import axios from "axios";
import AdminRoleTable from "./AdminRoleTable.jsx";
import AdminRoleForm from "./AdminRoleForm.jsx";
import AdminRoleFormEdit from "./AdminRoleFormEdit.jsx";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function AdminRoleTableF() {
//   return <AdminRoleTable/>;
// }
// function AdminRoleFormF() {
//   return  <AdminRoleForm onRoleSubmit={handleRoleSubmit}/>;
// }

// function handleRoleSubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class AdminRole extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {}
  };

  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      //  <Router>
      <div>
        {this.state.table ? (
          this.state.editForm ? (
            <AdminRoleFormEdit
              onRoleEditUpdate={this.handleRoleEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
            <AdminRoleTable
              onAddRole={this.handleAddRole}
              onEditRole={this.handleEditRole}
            />
          )
        ) : (
          <AdminRoleForm
            onRoleSubmit={this.handleRoleSubmit}
            onFormClose={this.handleFormClose}
          />
        )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/role/table" exact component={AdminRoleTable} /> */}
        {/* <Route path="/admin/role/form" exact component={() => <AdminRoleForm onRoleSubmit={this.handleRoleSubmit} />} /> */}

        {/* <AdminRoleTable/> */}
      </div>

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
      .post("http://localhost:3000/api/admin/role", body)
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
      _id: info["_id"],
      CompanyID: formData1,
      RoleName: formData2,
      RoleID: info["RoleID"]
    };
    console.log("update", body);
    axios
      .put("http://localhost:3000/api/admin/role/" + info["RoleID"], body)
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

export default AdminRole;
