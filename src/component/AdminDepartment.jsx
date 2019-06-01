import React, { Component } from "react";
import "./AdminDepartment.css";
import axios from "axios";
import AdminDepartmentTable from "./AdminDepartmentTable.jsx";
import AdminDepartmentForm from "./AdminDepartmentForm.jsx";
import AdminDepartmentFormEdit from "./AdminDepartmentFormEdit.jsx";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function AdminDepartmentTableF() {
//   return <AdminDepartmentTable/>;
// }
// function AdminDepartmentFormF() {
//   return  <AdminDepartmentForm onDepartmentSubmit={handleDepartmentSubmit}/>;
// }

// function handleDepartmentSubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class AdminDepartment extends Component {
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
            <AdminDepartmentFormEdit
              onDepartmentEditUpdate={this.handleDepartmentEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
            <AdminDepartmentTable
              onAddDepartment={this.handleAddDepartment}
              onEditDepartment={this.handleEditDepartment}
            />
          )
        ) : (
          <AdminDepartmentForm
            onDepartmentSubmit={this.handleDepartmentSubmit}
            onFormClose={this.handleFormClose}
          />
        )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/Department/table" exact component={AdminDepartmentTable} /> */}
        {/* <Route path="/admin/Department/form" exact component={() => <AdminDepartmentForm onDepartmentSubmit={this.handleDepartmentSubmit} />} /> */}

        {/* <AdminDepartmentTable/> */}
      </div>

      //  </Router>
    );
  }
  handleDepartmentSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      CompanyID: event.target[0].value,
      DepartmentName: event.target[1].value
    };
    //  let body= "CompanyID=" + event.target[0].value + "&Department=" + event.target[1].value;
    //  let body= "FenilKaneria";
    axios
      .post("http://localhost:3000/api/admin/department", body)
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
  handleAddDepartment = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditDepartment = e => {
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
  handleDepartmentEditUpdate = (info, formData1, formData2) => {
    // this.setState({ table: true });
    let body = {
      // ...info,CompanyID:formData1,Department:formData2
      _id: info["_id"],
      CompanyID: formData1,
      DepartmentName: formData2,
      DepartmentID: info["DepartmentID"]
    };
    console.log("update", body);
    axios
      .put(
        "http://localhost:3000/api/admin/department/" + info["DepartmentID"],
        body
      )
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

export default AdminDepartment;
