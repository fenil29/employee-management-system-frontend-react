import React, { Component } from "react";
import "./Department.css";
import axios from "axios";
import DepartmentTable from "./DepartmentTable.jsx";
import DepartmentForm from "./DepartmentForm.jsx";
import DepartmentFormEdit from "./DepartmentFormEdit.jsx";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

// function DepartmentTableF() {
//   return <DepartmentTable/>;
// }
// function DepartmentFormF() {
//   return  <DepartmentForm onDepartmentSubmit={handleDepartmentSubmit}/>;
// }

// function handleDepartmentSubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class Department extends Component {
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
            <DepartmentFormEdit
              onDepartmentEditUpdate={this.handleDepartmentEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <DepartmentTable
                onAddDepartment={this.handleAddDepartment}
                onEditDepartment={this.handleEditDepartment}
              />
            )
        ) : (
            <DepartmentForm
              onDepartmentSubmit={this.handleDepartmentSubmit}
              onFormClose={this.handleFormClose}
            />
          )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/Department/table" exact component={DepartmentTable} /> */}
        {/* <Route path="/admin/Department/form" exact component={() => <DepartmentForm onDepartmentSubmit={this.handleDepartmentSubmit} />} /> */}

        {/* <DepartmentTable/> */}
      </React.Fragment>

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
      .post("https://employee-management-fk-api.herokuapp.com/api/department", body, {
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
  handleDepartmentEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    // this.setState({ table: true });
    let body = {
      // ...info,CompanyID:formData1,Department:formData2

      CompanyID: newInfo.target[0].value,
      DepartmentName: newInfo.target[1].value,
    };
    console.log("update", body);
    axios
      .put(
        "https://employee-management-fk-api.herokuapp.com/api/department/" + info["_id"],
        body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
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

export default Department;
