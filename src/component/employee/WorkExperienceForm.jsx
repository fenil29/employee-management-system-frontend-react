import React, { Component } from "react";
import "./WorkExperienceForm.css";
import { Form,Button,Col,Row } from "react-bootstrap";
import axios from "axios";

class WorkExperienceForm extends Component {
  state = {
  };
  componentWillMount()  {
     
  }
  render() {
    return (
      <div>
        
        <h2 id="role-form-title">Add WorkExperience Details</h2>
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onWorkExperienceSubmit}>
  

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Company Name
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="CompanyName" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Designation
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Designation" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    FromDate
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    ToDate
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date" placeholder="ToDate" required/>
    </Col>
  </Form.Group>
 
  

  <Form.Group as={Row} id="form-submit-button">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
  <Form.Group as={Row} id="form-cancel-button">
    <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
      <Button type="reset" onClick={this.props.onFormClose}>cancel</Button>
    </Col>
  </Form.Group>
</Form></div>
      </div>
    );
  }
}

export default WorkExperienceForm;
