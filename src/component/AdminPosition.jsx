import React, { Component } from "react";
import "./AdminPosition.css";
import axios from "axios";
import AdminPositionTable from "./AdminPositionTable.jsx";
import AdminPositionForm from "./AdminPositionForm.jsx";
import AdminPositionFormEdit from "./AdminPositionFormEdit.jsx";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function AdminPositionTableF() {
//   return <AdminPositionTable/>;
// }
// function AdminPositionFormF() {
//   return  <AdminPositionForm onPositionSubmit={handlePositionSubmit}/>;
// }

// function handlePositionSubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class AdminPosition extends Component {
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
            <AdminPositionFormEdit
              onPositionEditUpdate={this.handlePositionEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
            <AdminPositionTable
              onAddPosition={this.handleAddPosition}
              onEditPosition={this.handleEditPosition}
            />
          )
        ) : (
          <AdminPositionForm
            onPositionSubmit={this.handlePositionSubmit}
            onFormClose={this.handleFormClose}
          />
        )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/Position/table" exact component={AdminPositionTable} /> */}
        {/* <Route path="/admin/Position/form" exact component={() => <AdminPositionForm onPositionSubmit={this.handlePositionSubmit} />} /> */}

        {/* <AdminPositionTable/> */}
      </div>

      //  </Router>
    );
  }
  handlePositionSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      CompanyID: event.target[0].value,
      PositionName: event.target[1].value
    };
    //  let body= "CompanyID=" + event.target[0].value + "&Position=" + event.target[1].value;
    //  let body= "FenilKaneria";
    axios
      .post("http://localhost:3000/api/admin/position", body)
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
  handleAddPosition = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditPosition = e => {
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
  handlePositionEditUpdate = (info, formData1, formData2) => {
    // this.setState({ table: true });
    let body = {
      // ...info,CompanyID:formData1,Position:formData2
      _id: info["_id"],
      CompanyID: formData1,
      PositionName: formData2,
      PositionID: info["PositionID"]
    };
    console.log("update", body);
    axios
      .put(
        "http://localhost:3000/api/admin/position/" + info["PositionID"],
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

export default AdminPosition;
