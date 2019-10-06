import React, { Component } from "react";
import "./AdminProjectBidTable.css";
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

class AdminProjectBidTable extends Component {
  state = {
    projectBidData: [],
    loading: true,

    columnDefs: [
      // {
      //   headerName: "",
      //   field: "",
      //   sortable: true
      //   // filter: true ,
      // },
      // {
      //   headerName: "",
      //   field: "",
      //   sortable: true,
      //   type: "numberColumn",
      //   filter: 'agNumberColumnFilter'
      //   // filter: true ,
      // },
      {
        headerName: "Project Title",
        field: "ProjectTitle",
        sortable: true
        // filter: true ,
      },
      {
        headerName: "Portal",
        field: "PortalName",
        sortable: true
        // filter: true ,
      },
      {
        headerName: "Project URL",
        field: "ProjectURL",
        sortable: true
        // filter: true ,
      },
      {
        headerName: "Estimated Time",
        field: "EstimatedTime",
        sortable: true
        // filter: true ,
      },
      {
        headerName: "Estimated Cost",
        field: "EstimatedCost",
        sortable: true,
        type: "numberColumn",
        filter: 'agNumberColumnFilter'
        // filter: true ,
      },
      {
        headerName: "Remark",
        field: "Remark",
        sortable: true
        // filter: true ,
      },


      {
        headerName: "",
        field: "edit",
        filter: false,
        width: 30,
        cellRendererFramework: this.renderEditButton.bind(this),


      },
      {
        headerName: "",
        field: "delete",
        filter: false,
        width: 30,
        cellRendererFramework: this.renderButton.bind(this),


      },

    ],
    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 200,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function (params) {
      return 35;
    }
  };
  projectBidObj = [];
  rowDataT = [];

  loadProjectBidData = () => {
    axios
      .get("https://employee-management-fk-api.herokuapp.com/api/admin/project-bid", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.projectBidObj = response.data;
        console.log("response", response.data);
        this.setState({ projectBidData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];

        this.projectBidObj.map(data => {
          let temp = {
            data,
            ProjectTitle: data["ProjectTitle"],
            PortalName: data["portals"][0]["PortalName"],
            ProjectURL: data["ProjectURL"],
            EstimatedTime: data["EstimatedTime"],
            EstimatedCost: data["EstimatedCost"],
            Remark: data["Remark"],

          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onProjectBidDelete = e => {
    console.log(e);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete("https://employee-management-fk-api.herokuapp.com/api/admin/project-bid/" + e, {
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
    this.loadProjectBidData();
  }
  renderButton(params) {
    console.log(params);
    return <FontAwesomeIcon
      icon={faTrash}
      onClick={() => this.onProjectBidDelete(params.data.data["_id"])}
    />;
  }
  renderEditButton(params) {
    console.log(params);
    return <FontAwesomeIcon
      icon={faEdit}
      onClick={() => this.props.onEditProjectBid(params.data.data)}
    />;
  }

  render() {
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">Bidding Details</h2>
        <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddProjectBid}
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

export default AdminProjectBidTable;
