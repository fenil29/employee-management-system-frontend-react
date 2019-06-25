import React, { Component } from "react";
import "./FamilyInfoForm.css";
import { Form,Button,Col,Row } from "react-bootstrap";
import axios from "axios";

class FamilyInfoForm extends Component {
  state = {
  };
  componentWillMount()  {
     
  }
  render() {
    return (
      <div>
        
        <h2 id="role-form-title">Add FamilyInfo Details</h2>
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onFamilyInfoSubmit}>
  

  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Name
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Name" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Relationship
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Relationship" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    DOB 
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="date"   required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Occupation
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Occupation" required/>
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

export default FamilyInfoForm;
