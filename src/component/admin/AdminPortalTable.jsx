import React, { Component } from "react";
import "./AdminPortalTable.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Button } from "react-bootstrap";


import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class AdminPortalTable extends Component {
  state = {
    portalData: [],
    loading: true,

    columnDefs: [

      {
        headerName: "Portal",
        field: "PortalName",
        sortable: true,
        // width: 150,
        // filter: true ,
      },

      {
        headerName: "Status",
        field: "Status",
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
    getRowHeight: function (params) {
      return 35;
    }
  };
  portalObj = [];
  rowDataT = [];

  loadPortalData = () => {
    axios
      .get("https://employee-management-fk-api.herokuapp.com/api/admin/portal", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.portalObj = response.data;
        // }
        console.log("response", response.data);
        this.setState({ portalData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];

        this.portalObj.map(data => {
          let temp = {
            data,
            PortalName: data["PortalName"],
            Status: data["Status"] == 1 ? "enable" : "disable",

          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onPortalDelete = e => {
    console.log(e);
    if (
      window.confirm(
        "Are you sure to delete this record,It Will Delete All Projects Related to This Portal? "
      ) == true
    ) {
      axios
        .delete("https://employee-management-fk-api.herokuapp.com/api/admin/portal/" + e, {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        })
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  componentDidMount() {
    this.loadPortalData();
  }
  renderButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() =>
          this.onPortalDelete(params.data.data["_id"])
        }
      />
    );
  }
  renderEditButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => this.props.onEditPortal(params.data.data)}
      />
    );
  }

  render() {
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">Portal Details</h2>
        <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddPortal}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button>
        <div id="clear-both" />

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

export default AdminPortalTable;
