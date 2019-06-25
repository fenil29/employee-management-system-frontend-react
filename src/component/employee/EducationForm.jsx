import React, { Component } from "react";
import "./EducationForm.css";
import { Form,Button,Col,Row } from "react-bootstrap";
import axios from "axios";

class EducationForm extends Component {
  state = {
  };
  componentWillMount()  {
     
  }
  render() {
    return (
      <div>
        
        <h2 id="role-form-title">Add Education Details</h2>
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onEducationSubmit}>
  

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    School / University 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="School / University " required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Degree 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Degree " required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Grade
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Grade"  required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Passing Of Year
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Passing Of Year" required/>
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

export default EducationForm;
