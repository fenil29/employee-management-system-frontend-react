import React, { Component } from "react";
import "./State.css";
import axios from "axios";
import StateTable from "./StateTable.jsx";
import StateForm from "./StateForm.jsx";
import StateFormEdit from "./StateFormEdit.jsx";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

// function StateTableF() {
//   return <StateTable/>;
// }
// function StateFormF() {
//   return  <StateForm onStateSubmit={handleStateSubmit}/>;
// }

// function handleStateSubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class State extends Component {
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
            <StateFormEdit
              onStateEditUpdate={this.handleStateEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
            <StateTable
              onAddState={this.handleAddState}
              onEditState={this.handleEditState}
            />
          )
        ) : (
          <StateForm
            onStateSubmit={this.handleStateSubmit}
            onFormClose={this.handleFormClose}
          />
        )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/state/table" exact component={StateTable} /> */}
        {/* <Route path="/admin/state/form" exact component={() => <StateForm onStateSubmit={this.handleStateSubmit} />} /> */}

        {/* <StateTable/> */}
        </React.Fragment>

      //  </Router>
    );
  }
  handleStateSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      CountryID: event.target[0].value,
      StateName: event.target[1].value
    };
    //  let body= "CompanyID=" + event.target[0].value + "&State=" + event.target[1].value;
    //  let body= "FenilKaneria";
    axios
      .post(process.env.REACT_APP_API_URL + "/api/state", body, {
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
  handleAddState = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditState = e => {
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
  handleStateEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    // this.setState({ table: true });
    let body = {
      CountryID: newInfo.target[0].value,
      StateName: newInfo.target[1].value
    };
    console.log("update", body);
    axios
      .put(process.env.REACT_APP_API_URL + "/api/state/" + info["_id"], body, {
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

export default State;
