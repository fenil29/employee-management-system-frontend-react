import React, { Component } from "react";
import "./AdminProjectBidFormEdit.css";
import axios from "axios";
import { Form, Button, Col, Row } from "react-bootstrap";



class AdminProjectBidFormEdit extends Component {
  state = {
    status: '',
    portalsInfo: [],
    ProjectTitleData: this.props.editData["ProjectTitle"],
    ProjectURLData: this.props.editData["ProjectURL"],
    ProjectDescriptionData: this.props.editData["ProjectDesc"],
    EstimatedTimeData: this.props.editData["EstimatedTime"],

    RemarkData: this.props.editData["Remark"],

  };
  onProjectTitleDataChange(e) {
    this.setState({ ProjectTitleData: e.target.value });
  }
  onProjectURLDataChange(e) {
    this.setState({ ProjectURLData: e.target.value });
  }
  onProjectDescriptionDataChange(e) {
    this.setState({ ProjectDescriptionData: e.target.value });
  }
  onPortalsDataChange(e) {
    this.setState({ PortalsData: e.target.value });
  }
  onEstimatedTimeDataChange(e) {
    this.setState({ EstimatedTimeData: e.target.value });
  }
  onEstimatedCostDataChange(e) {
    this.setState({ EstimatedCostData: e.target.value });
  }
  onResourceDataChange(e) {
    this.setState({ ResourceData: e.target.value });
  }
  onStatusDataChange(e) {
    this.setState({ StatusData: e.target.value });
  }
  onRemarkDataChange(e) {
    this.setState({ RemarkData: e.target.value });
  }

  portalsData = [];
  handleChange = (event) => {
    this.setState({
      status: event.target.value
    });
  }
  loadPortalsInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/admin/portal", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.portalsData = response.data;

        this.portalsData = this.portalsData.filter((data) => data["Status"] == 1);

        this.setState({ portalsInfo: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.loadPortalsInfo();
  }
  render() {

    return (
      <React.Fragment>
        <h2 id="role-form-title">Edit Project Bid Details</h2>
        <div id="role-form-outer-div"><Form id="form" onSubmit={e => this.props.onProjectBidEditUpdate(this.props.editData, e)}>
          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Project Title
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control type="Text" placeholder="Project Title" name="ProjectTitle" required
                value={this.state.ProjectTitleData}
                onChange={value => this.onProjectTitleDataChange(value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Project URL
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control type="Text" placeholder="Project URL" name="ProjectURL" required
                value={this.state.ProjectURLData}
                onChange={value => this.onProjectURLDataChange(value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Project Description
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control as="textarea" rows="3" required
                value={this.state.ProjectDescriptionData}
                onChange={value => this.onProjectDescriptionDataChange(value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Portals
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control as="select" name="CompanyID" required>
                {this.portalsData.map((data, index) => (
                  <option value={data["_id"]}
                    selected={
                      this.props.editData["portals"][0]["ID"] == data["ID"]
                    }
                  >{data["PortalName"]}</option>))}
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Estimated Time
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control type="number" placeholder="Estimated Time" name="EstimatedTime" required
                value={this.state.EstimatedTimeData}
                onChange={value => this.onEstimatedTimeDataChange(value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Estimated Cost
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control type="number" placeholder="Estimated Cost" name="EstimatedCost" required
                value={this.state.EstimatedCostData}
                onChange={value => this.onEstimatedCostDataChange(value)} />
            </Col>
          </Form.Group>



          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Resource
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control as="select" required>
                <option value="1" selected={
                  this.props.editData["ResourceID"] == 1
                }>Resource1</option>
                <option value="2" selected={this.props.editData["ResourceID"] == 2}>Resource2</option>
                <option value="3" selected={this.props.editData["ResourceID"] == 3}>Resource3</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Status
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control as="select" required>
                <option value="1" selected={this.props.editData["Status"] == 1}>Open</option>
                <option value="2" selected={this.props.editData["Status"] == 2}>Close</option>
                <option value="3" selected={this.props.editData["Status"] == 3}>Cancel</option>
                <option value="4" selected={this.props.editData["Status"] == 4}>Award</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm={2}>
              Remark
    </Form.Label>
            <Col sm={10} className="form-input">
              <Form.Control as="textarea" rows="3" required value={this.state.RemarkData}
                onChange={value => this.onRemarkDataChange(value)} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} id="form-submit-button">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} id="form-cancel-button">
            <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
              <Button type="reset" onClick={this.props.onFormEditClose}>cancel</Button>
            </Col>
          </Form.Group>
        </Form></div>
        {/* </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default AdminProjectBidFormEdit;
