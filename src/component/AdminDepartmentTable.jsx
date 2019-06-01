import React, { Component } from "react";
import "./AdminDepartmentTable.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";
// var FontAwesome = require('react-fontawesome');
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class AdminDepartmentTable extends Component {
  state = {
    departmentData: [],
    loading: true
  };
  departmentObj = [];
  // DepartmentDataArray;
  loadDepartmentData = () => {
    axios
      .get("http://localhost:3000/api/admin/department")
      .then(response => {
        // if(response.data.length==0){this.DepartmentObj=["temp"];}
        // else{
        this.departmentObj = response.data;
        // }
        console.log("response", response.data);
        this.setState({ departmentData: response.data });
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onDepartmentDelete = e => {
    console.log(e);
    // let body= "ID=" + e;
    if (window.confirm("Are you sure to delete this record ? ") == true) {
      axios
        .delete("http://localhost:3000/api/admin/department/" + e)
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
        });
    }

    // axios
    // .delete("http://localhost:3000/api/admin/Department", })
    // .then(response => {

    // })
    // .catch(error => {
    //   console.log(error);
    // });
    // axios.delete('http://localhost:3000/api/admin/Department')
    //      .then(res => console.log(res.data));
    // fetch("http://localhost:3000/api/admin/Department", {
    //   method: 'delete'
    // })
    // .then(response => response.json());
  };

  // function print(){{console.log("test")}}
  //   print();
  componentDidMount() {
    this.loadDepartmentData();
    // axios
    // .get("http://test.bhavitechnologies.com/api/Department")
    // .then(res => {console.log(res);

    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      <div>
        <h2 id="role-title">Department Details</h2>
        {/* <Link to="/admin/Department/form"> */}
        <button id="add-button" onClick={this.props.onAddDepartment}>
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </button>
        {/* </Link> */}
        <div>
          <table id="role-table">
            <thead>
              <th width="30%">CompanyName</th>
              <th width="30%">Department</th>
              <th width="20%" />
              <th width="20%" />
            </thead>

            {!this.state.loading ? (
              <React.Fragment>
                {this.departmentObj.map((data, index) => (
                  <React.Fragment>
                    {console.log(index, data)}

                    <tr>
                      <td>{data["CompanyName"]}</td>
                      <td>{data["DepartmentName"]}</td>
                      <td onClick={() => this.props.onEditDepartment(data)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </td>
                      <td onClick={() => this.onDepartmentDelete(data["_id"])}>
                        <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                {/* <table id="Department-table"><thead>
   <th width="30%">CompanyName</th>
   <th width="30%">Department</th>
   <th width="20%"></th>
   <th width="20%"></th>
 </thead>
 <tr>
   <td>1234</td>
   <td>5678</td>
   <td><FontAwesomeIcon icon={faEdit} /></td>
   <td><FontAwesomeIcon icon={faTrash} /></td>
 </tr>
 <tr>
   <td>1234</td>
   <td>5678</td>
   <td>95435</td>
   <td>4654</td>
 </tr>
 <tr>
   <td>1234</td>
   <td>5678</td>
   <td>95435</td>
   <td>4654</td>
 </tr>
 </table> */}

                {/* {this.DepartmentObj[0].toString()} */}

                {console.log("final", this.departmentObj)}
              </React.Fragment>
            ) : (
              <tr>
                <td />
                <td>
                  {" "}
                  <div id="loading-bar">
                    <BarLoader
                      css={override}
                      sizeUnit={"px"}
                      size={150}
                      color={"#0000ff"}
                      loading={true}
                    />
                  </div>
                </td>
                <td />
                <td />
              </tr>
            )}
          </table>
        </div>
      </div>
    );
  }
}

export default AdminDepartmentTable;
