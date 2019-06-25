import React, { Component } from "react";
import "./CountryForm.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Form,Button,Col,Row } from "react-bootstrap";
// import Form from 'react-bootstrap/Form'


class CountryForm extends Component {
  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      <div>
  
        <h2 id="role-form-title">Add Country Details</h2>
     
            
 <div id="role-form-outer-div"><Form id="form" onSubmit={this.props.onCountrySubmit}>
  


  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Country
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Country" name="Country" required/>
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





          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default CountryForm;
