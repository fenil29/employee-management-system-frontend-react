import React, { Component } from "react";
import "./AdminRoleTable.css";
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

class AdminRoleTable extends Component {
  state = {
    roleData: [],
    loading: true
  };
  roleObj = [];
  // roleDataArray;
  loadRoleData = () => {
    axios
      .get("http://localhost:3000/api/admin/role")
      .then(response => {
        // if(response.data.length==0){this.roleObj=["temp"];}
        // else{
        this.roleObj = response.data;
        // }
        console.log("response", response.data);
        this.setState({ roleData: response.data });
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onRoleDelete = e => {
    console.log(e);
    // let body= "ID=" + e;
    if (window.confirm("Are you sure to delete this record ? ") == true) {
      axios
        .delete("http://localhost:3000/api/admin/role/" + e)
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
        });
    }

    // axios
    // .delete("http://localhost:3000/api/admin/role", })
    // .then(response => {

    // })
    // .catch(error => {
    //   console.log(error);
    // });
    // axios.delete('http://localhost:3000/api/admin/role')
    //      .then(res => console.log(res.data));
    // fetch("http://localhost:3000/api/admin/role", {
    //   method: 'delete'
    // })
    // .then(response => response.json());
  };

  // function print(){{console.log("test")}}
  //   print();
  componentDidMount() {
    this.loadRoleData();
    // axios
    // .get("http://test.bhavitechnologies.com/api/Role")
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
        <h2 id="role-title">Role Details</h2>
        {/* <Link to="/admin/role/form"> */}
        <button id="add-button" onClick={this.props.onAddRole}>
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </button>
        {/* </Link> */}
        <div>
          <table id="role-table">
            <thead>
              <th width="30%">CompanyName</th>
              <th width="30%">Role</th>
              <th width="20%" />
              <th width="20%" />
            </thead>

            {!this.state.loading ? (
              <React.Fragment>
                {this.roleObj.map((data, index) => (
                  <React.Fragment>
                    {console.log(index, data)}

                    <tr>
                      <td>{data["CompanyName"]}</td>
                      <td>{data["RoleName"]}</td>
                      <td onClick={() => this.props.onEditRole(data)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </td>
                      <td onClick={() => this.onRoleDelete(data["_id"])}>
                        <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                {/* <table id="role-table"><thead>
   <th width="30%">CompanyName</th>
   <th width="30%">Role</th>
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

                {/* {this.roleObj[0].toString()} */}

                {console.log("final", this.roleObj)}
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

export default AdminRoleTable;
