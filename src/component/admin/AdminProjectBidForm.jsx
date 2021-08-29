import React, { Component } from "react";
import "./AdminProjectBidForm.css";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

class AdminProjectBidForm extends Component {
  state = {
    status: "",
    portalsInfo: []
  };
  portalsData = [];
  handleChange = event => {
    this.setState({
      status: event.target.value
    });
  };
  loadPortalsInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/admin/portal", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        // i
        this.portalsData = response.data;

        this.portalsData = this.portalsData.filter(data => data["Status"] == 1);

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
        <h2 id="role-form-title">Add Project Bid Details</h2>
        {/* <div id="role-form-outer-div">
          <div id="role-form-inner-div"> */}

        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onProjectBidSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Project Title
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Project Title"
                  name="ProjectTitle"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Project URL
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Project URL"
                  name="ProjectURL"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Project Description
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="textarea" rows="3" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Portals
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="CompanyID" required>
                  {this.portalsData.map((data, index) => (
                    <option value={data["_id"]}>{data["PortalName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Estimated Time
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="number"
                  placeholder="Estimated Time"
                  name="EstimatedTime"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Estimated Cost
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="number"
                  placeholder="Estimated Cost"
                  name="EstimatedCost"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Resource
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="1">Resource1</option>
                  <option value="2">Resource2</option>
                  <option value="3">Resource3</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Status
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="1">Open</option>
                  <option value="1">Close</option>
                  <option value="1">Cancel</option>
                  <option value="1">Award</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Remark
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="textarea" rows="3" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminProjectBidForm;
