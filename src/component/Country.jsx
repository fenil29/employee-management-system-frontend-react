import React, { Component } from "react";
import "./Country.css";
import axios from "axios";
import CountryTable from "./CountryTable.jsx";
import CountryForm from "./CountryForm.jsx";
import CountryFormEdit from "./CountryFormEdit.jsx";
// import { HashRouter as Router, Route, Link } from "react-router-dom";

// function CountryTableF() {
//   return <CountryTable/>;
// }
// function CountryFormF() {
//   return  <CountryForm onCountrySubmit={handleCountrySubmit}/>;
// }

// function handleCountrySubmit(e) {
//   e.preventDefault();
//   console.log(e);

// }

class Country extends Component {
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
            <CountryFormEdit
              onCountryEditUpdate={this.handleCountryEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <CountryTable
                onAddCountry={this.handleAddCountry}
                onEditCountry={this.handleEditCountry}
              />
            )
        ) : (
            <CountryForm
              onCountrySubmit={this.handleCountrySubmit}
              onFormClose={this.handleFormClose}
            />
          )}

        {/* <div>fenil</div> */}
        {/* <Route path="/admin/country/table" exact component={CountryTable} /> */}
        {/* <Route path="/admin/country/form" exact component={() => <CountryForm onCountrySubmit={this.handleCountrySubmit} />} /> */}

        {/* <CountryTable/> */}
      </React.Fragment>

      //  </Router>
    );
  }
  handleCountrySubmit = event => {
    event.preventDefault();
    console.log("name", event.target[0].value);
    this.setState({ table: true });

    let body = {
      CountryName: event.target[0].value
    };
    //  let body= "CompanyID=" + event.target[0].value + "&Country=" + event.target[1].value;
    //  let body= "FenilKaneria";
    axios
      .post(process.env.REACT_APP_API_URL + "/api/country", body, {
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
  handleAddCountry = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditCountry = e => {
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
  handleCountryEditUpdate = (info, newInfo) => {
    // this.setState({ table: true });
    let body = {
      // ...info,CompanyID:formData1,Country:formData2
      //   CompanyID: formData1,
      CountryName: newInfo.target[0].value,
      //   CountryID: info["CountryID"]
    };
    console.log("update", body);
    axios
      .put(process.env.REACT_APP_API_URL + "/api/country/" + info["_id"], body, {
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

export default Country;
