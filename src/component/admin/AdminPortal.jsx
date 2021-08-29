import React, { Component } from "react";
import "./AdminPortal.css";
import axios from "axios";
import AdminPortalTable from "./AdminPortalTable.jsx";
import AdminPortalForm from "./AdminPortalForm.jsx";
import AdminPortalFormEdit from "./AdminPortalFormEdit.jsx";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

// function AdminPortalTableF() {
//   return <AdminPortalTable/>;
// }
// function AdminPortalFormF() {
//   return  <AdminPortalForm onPortalSubmit={handlePortalSubmit}/>;
// }

// function handlePortalSubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class AdminPortal extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {},
    addFormStatus: "",
    editFormStatus: ""
  };

  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      //  <Router>
      <React.Fragment>
        {this.state.table ? (
          this.state.editForm ? (
            <AdminPortalFormEdit
              onPortalEditUpdate={this.handlePortalEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
              onStatusChange={this.handleEditFormStatusChange}
            />
          ) : (
              <AdminPortalTable
                onAddPortal={this.handleAddPortal}
                onEditPortal={this.handleEditPortal}
              />
            )
        ) : (
            <AdminPortalForm
              onPortalSubmit={this.handlePortalSubmit}
              onFormClose={this.handleFormClose}
              onStatusChange={this.handleAddFormStatusChange}
            />
          )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/Portal/table" exact component={AdminPortalTable} /> */}
        {/* <Route path="/admin/Portal/form" exact component={() => <AdminPortalForm onPortalSubmit={this.handlePortalSubmit} />} /> */}

        {/* <AdminPortalTable/> */}
      </React.Fragment>

      //  </Router>
    );
  }
  handlePortalSubmit = event => {
    event.preventDefault();
    console.log("portal", event.target[0].value, event.target[1].value, event.target[2].value);
    console.log("portal status", this.state.addFormStatus);
    this.setState({ table: true });

    let body = {
      PortalName: event.target[0].value,
      Status: this.state.addFormStatus
    };
    //  let body= "CompanyID=" + event.target[0].value + "&Portal=" + event.target[1].value;
    //  let body= "FenilKaneria";
    axios
      .post(process.env.REACT_APP_API_URL + "/api/admin/portal", body, {
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
  handleAddPortal = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditPortal = e => {
    console.log(e);
    console.log("clicked6");
    this.setState({ editForm: true });
    this.setState({ editData: e });
    this.setState({ editFormStatus: e["Status"] });
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
  handleAddFormStatusChange = (e) => {
    // console.log(e.currentTarget.value);
    this.setState({
      addFormStatus: e.currentTarget.value
    });

  };
  handleEditFormStatusChange = (e) => {
    // console.log(e.currentTarget.value);
    this.setState({
      editFormStatus: e.currentTarget.value
    });

  };
  handlePortalEditUpdate = (info, formData1) => {
    // this.setState({ table: true });
    let body = {
      // ...info,CompanyID:formData1,Portal:formData2
      _id: info["_id"],
      PortalName: formData1,
      Status: this.state.editFormStatus,
      ID: info["ID"],
    };
    console.log("update", body);
    axios
      .put(process.env.REACT_APP_API_URL + "/api/admin/portal/" + info["ID"], body, {
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

export default AdminPortal;
