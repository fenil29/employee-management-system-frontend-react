import React, { Component } from "react";
import "./StateTable.css";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import {Button} from "react-bootstrap";

// var FontAwesome = require('react-fontawesome');
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;
class StateTable extends Component {
  state = {
    stateData: [],
    loading: true,

    columnDefs: [
   
      {
        headerName: "Country",
        field: "CountryName",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
   
      {
        headerName: "State",
        field: "StateName",
        sortable: true,
        // width: 150,
        // filter: true ,
      },
      
      

      {
        headerName: "",
        field: "edit",
        filter: false,
        width: 30,
        cellRendererFramework: this.renderEditButton.bind(this)
      },
      {
        headerName: "",
        field: "delete",
        filter: false,
        width: 30,
        cellRendererFramework: this.renderButton.bind(this)
      }
    ],
    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 590,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function(params) {
      return 35;
    }


  };
  stateObj = [];
  rowDataT = [];

  // stateDataArray;
  loadStateData = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/state", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        // if(response.data.length==0){this.stateObj=["temp"];}
        // else{
        this.stateObj = response.data;
        // }
        console.log("response", response.data);
        this.setState({ stateData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];

        this.stateObj.map(data => {
          let temp = {
            data,
            CountryName: data["country"][0]["CountryName"],
            StateName:data["StateName"],
            
          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onStateDelete = e => {
    console.log(e);
    // let body= "ID=" + e;
    if (window.confirm("Are you sure to delete this record ? ") == true) {
      axios
        .delete(process.env.REACT_APP_API_URL + "/api/state/" + e, {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        })
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
          if(err.response.status==403){
            window.alert(err.response.data) ;}
        });
    }

    // axios
    // .delete(process.env.REACT_APP_API_URL + "/api/state", })
    // .then(response => {

    // })
    // .catch(error => {
    //   console.log(error);
    // });
    // axios.delete('https://employee-management-fk-api.herokuapp.com/api/state')
    //      .then(res => console.log(res.data));
    // fetch(process.env.REACT_APP_API_URL + "/api/state", {
    //   method: 'delete'
    // })
    // .then(response => response.json());
  };

  // function print(){{console.log("test")}}
  //   print();
  componentDidMount() {
    this.loadStateData();
      }
  renderButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() =>
          this.onStateDelete(params.data.data["_id"])
        }
      />
    );
  }
  renderEditButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => this.props.onEditState(params.data.data)}
      />
    );
  }

  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">State Details</h2>
        {/* <Link to="/admin/role/form"> */}
        {/* <button id="add-button" >
          
          Add
        </button> */}
        <Button variant="primary" id="add-button" onClick={this.props.onAddState}><FontAwesomeIcon icon={faPlus} id="plus-icon" />Add</Button>
        {/* </Link> */}
        <div id="clear-both"></div>
        {!this.state.loading ? (
          <div
            id="table-div"
            className="ag-theme-balham"
            //   style={
            //     {
            //     height: "500px",
            //     width: "100%"
            //   }
            // }
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              // floatingFilter={true}
              // onGridReady={this.onGridReady}
              pagination={true}
              paginationPageSize={10}
              getRowHeight={this.state.getRowHeight}
            />
          </div>
        ) : (
          <div id="loading-bar">
            <RingLoader
              css={override}
              sizeUnit={"px"}
              size={50}
              color={"#0000ff"}
              loading={true}
            />
          </div>
        )}
     
      </div>
    );
  }
}

export default StateTable;
