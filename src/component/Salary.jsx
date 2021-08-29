import React, { Component } from "react";
import "./Salary.css";
import axios from "axios";
import SalaryTable from "./SalaryTable.jsx";
import SalaryForm from "./SalaryForm.jsx";
import SalaryFormEdit from "./SalaryFormEdit.jsx";
class Salary extends Component {
  state = {
    table: true,
    editForm: false,
  };

  render() {
    return (
      <React.Fragment>
        {this.state.table ? (
          this.state.editForm ? (
            <SalaryFormEdit
              onSalaryEditUpdate={this.handleSalaryEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
              onGenderChange={this.handleEditFormGenderChange}
            />
          ) : (
            <SalaryTable
              onAddSalary={this.handleAddSalary}
              onEditSalary={this.handleEditSalary}              
            />
          )
        ) : (
          <SalaryForm
            onSalarySubmit={this.handleSalarySubmit}
            onFormClose={this.handleFormClose}
            onGenderChange={this.handleAddFormGenderChange}
          />
        )}    
        </React.Fragment>
    );
  }
  handleSalarySubmit = event => {
        event.preventDefault();
        if(!(event.target[3].value==event.target[4].value)){
              window.alert("The bank account number you entered does not match ")
        }
        else{

          console.log("id", event.target[0].value, event.target[1].value);
          this.setState({ table: true });
      
          let body = {     
            // Status:this.state.editFormStatus,
            
        
        // DateOfJoining: { type: Date, required: true },
        // TerminateDate: { type: Date },
      
      
            // SalaryName: event.target[0].value,
            // Address: event.target[1].value,
            // CityID:event.target[4].value,
            // PostalCode: event.target[5].value,
            // Website: event.target[6].value,
            // Email: event.target[7].value,
            // ContactPerson: event.target[8].value,
            // ContactNo: event.target[9].value,
            // FaxNo: event.target[10].value,
            // PanNo: event.target[11].value,
            // GSTNo: event.target[12].value,
            // CINNo: event.target[13].value,  
           
            BasicSalary:  event.target[1].value,
            BankName:event.target[2].value,
            AccountNo: event.target[3].value,
            AccountHolderName:event.target[5].value,
            IFSCcode: event.target[6].value,
            TaxDeduction: event.target[7].value,
          };
          axios
            .post(process.env.REACT_APP_API_URL + "/api/salary/"+event.target[0].value, body, {
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
          console.log(err.response);
          if(err.response.status==403){
            window.alert(err.response.data) ;}
            });
        }
  };
  handleAddSalary = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditSalary = e => {
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

  handleSalaryEditUpdate = (info, newInfo) => {
console.log("eeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddd")
    newInfo.preventDefault();
    if(!(newInfo.target[3].value==newInfo.target[4].value)){
      window.alert("The bank account number you entered does not match ")
}
else{
    let body = {     
      // Status:this.state.editFormStatus,
      
  
  // DateOfJoining: { type: Date, required: true },
  // TerminateDate: { type: Date },


      // SalaryName: event.target[0].value,
      // Address: event.target[1].value,
      // CityID:event.target[4].value,
      // PostalCode: event.target[5].value,
      // Website: event.target[6].value,
      // Email: event.target[7].value,
      // ContactPerson: event.target[8].value,
      // ContactNo: event.target[9].value,
      // FaxNo: event.target[10].value,
      // PanNo: event.target[11].value,
      // GSTNo: event.target[12].value,
      // CINNo: event.target[13].value,  
      BasicSalary:  newInfo.target[1].value,
      BankName:newInfo.target[2].value,
      AccountNo: newInfo.target[3].value,
      AccountHolderName:newInfo.target[5].value,
      IFSCcode: newInfo.target[6].value,
      TaxDeduction: newInfo.target[7].value,      
    };
    console.log("update", body);
    axios
      .put(
        process.env.REACT_APP_API_URL + "/api/salary/" + info["salary"][0]["_id"],
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
  }
  };

}

export default Salary;
