import React, { Component } from "react";
import "./Company.css";
import axios from "axios";
import CompanyTable from "./CompanyTable.jsx";
import CompanyForm from "./CompanyForm.jsx";
import CompanyFormEdit from "./CompanyFormEdit.jsx";
class Company extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {}
  };

  render() {
    return (
      <React.Fragment>
        {this.state.table ? (
          this.state.editForm ? (
            <CompanyFormEdit
              onCompanyEditUpdate={this.handleCompanyEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <CompanyTable
                onAddCompany={this.handleAddCompany}
                onEditCompany={this.handleEditCompany}
              />
            )
        ) : (
            <CompanyForm
              onCompanySubmit={this.handleCompanySubmit}
              onFormClose={this.handleFormClose}
            />
          )}
      </React.Fragment>
    );
  }
  handleCompanySubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      CompanyName: event.target[0].value,
      Address: event.target[1].value,
      CityID: event.target[4].value,
      PostalCode: event.target[5].value,
      Website: event.target[6].value,
      Email: event.target[7].value,
      ContactPerson: event.target[8].value,
      ContactNo: event.target[9].value,
      FaxNo: event.target[10].value,
      PanNo: event.target[11].value,
      GSTNo: event.target[12].value,
      CINNo: event.target[13].value,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/company", body, {
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
  };
  handleAddCompany = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditCompany = e => {
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
  handleCompanyEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    let body = {
      CompanyName: newInfo.target[0].value,
      Address: newInfo.target[1].value,
      CityID: newInfo.target[4].value,
      PostalCode: newInfo.target[5].value,
      Website: newInfo.target[6].value,
      Email: newInfo.target[7].value,
      ContactPerson: newInfo.target[8].value,
      ContactNo: newInfo.target[9].value,
      FaxNo: newInfo.target[10].value,
      PanNo: newInfo.target[11].value,
      GSTNo: newInfo.target[12].value,
      CINNo: newInfo.target[13].value,
    };
    console.log("update", body);
    axios
      .put(
        process.env.REACT_APP_API_URL + "/api/company/" + info["_id"],
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

export default Company;
