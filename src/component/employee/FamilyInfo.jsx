import React, { Component } from "react";
import "./FamilyInfo.css";
import axios from "axios";
import FamilyInfoTable from "./FamilyInfoTable.jsx";
import FamilyInfoForm from "./FamilyInfoForm.jsx";
import FamilyInfoFormEdit from "./FamilyInfoFormEdit.jsx";
class FamilyInfo extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {},

  };

  render() {
    return (
      <React.Fragment>
        {/* <h1>iiiiiiiiiinnnnnnnnnnnnnn{
          JSON.stringify(this.props.data)}</h1> */}

        {this.state.table ? (
          this.state.editForm ? (
            <FamilyInfoFormEdit
              onFamilyInfoEditUpdate={this.handleFamilyInfoEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <FamilyInfoTable
                onAddFamilyInfo={this.handleAddFamilyInfo}
                onEditFamilyInfo={this.handleEditFamilyInfo}
                data={this.props.data}
                back={this.props.back}
              />
            )
        ) : (
            <FamilyInfoForm
              onFamilyInfoSubmit={this.handleFamilyInfoSubmit}
              onFormClose={this.handleFormClose}
              onGenderChange={this.handleAddFormGenderChange}
            />
          )}
      </React.Fragment>
    );
  }
  handleFamilyInfoSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      Name: event.target[0].value,
      Relationship: event.target[1].value,
      DOB: event.target[2].value,
      Occupation: event.target[3].value,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/family-info/" + this.props.data["_id"], body, {
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
  handleAddFamilyInfo = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditFamilyInfo = e => {
    console.log(e);
    console.log("clicked6");
    this.setState({ editForm: true });
    this.setState({ editData: e });
    this.setState({ editFormGender: e["Gender"] })
  };
  handleFormClose = () => {
    console.log("clicked1");
    this.setState({ table: true });
  };
  handleEditFormClose = () => {
    console.log("clicked5");
    this.setState({ editForm: false });
  };
  // handleFormClose = () => {
  //   console.log("clicked1");
  //   this.setState({ table: true });
  // };
  handleFamilyInfoEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    console.log("zero data", newInfo.target[0].value);
    let body = {
      Name: newInfo.target[0].value,
      Relationship: newInfo.target[1].value,
      DOB: newInfo.target[2].value,
      Occupation: newInfo.target[3].value,
    };
    console.log("update", body);
    axios
      .put(
        process.env.REACT_APP_API_URL + "/api/family-info/" + info["_id"],
        body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
      )
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ editForm: false });
  };

}

export default FamilyInfo;
