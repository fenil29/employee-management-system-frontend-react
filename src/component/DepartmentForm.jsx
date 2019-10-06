import React, { Component } from "react";
import "./DepartmentForm.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class DepartmentForm extends Component {
  state = {
    companyInfo: []
  };
  companyData = [];
  loadCompanyInfo = () => {
    axios
      .get("https://employee-management-fk-api.herokuapp.com/api/company", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        // if(response.data.length==0){this.roleObj=["temp"];}
        // else{

        // }
        this.companyData = response.data;

        // this.portalsData=this.portalsData.filter((data)=>data["Status"]==1);

        this.setState({ companyInfo: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentWillMount() {
    this.loadCompanyInfo();
  }
  render() {
    return (
      <div>
        <h2 id="role-form-title">Add Department Details</h2>

        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onDepartmentSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Company
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="country" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.companyData.map((data, index) => (
                    <option value={data["_id"]}>{data["CompanyName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Department
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Department"
                  name="Department"
                  required
                />
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
      </div>
    );
  }
}

export default DepartmentForm;
