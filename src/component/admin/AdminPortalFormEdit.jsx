import React, { Component } from "react";
// import "./AdminPortalForm.css";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
// import { Form,Button } from "react-bootstrap";
import { Form,Button,Col,Row } from "react-bootstrap";

class AdminPortalForm extends Component {
  state = {
    PortalData: this.props.editData["PortalName"],
    Status:this.props.editData["Status"]
  };
  onChange(e) {
    this.setState({ PortalData: e.target.value });
  }
  onStatusChange=(e)=>{
    this.setState({ Status: e.target.value });
    this.props.onStatusChange(e)
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit Portal Details</h2>
     
         <div id="role-form-outer-div"><Form id="form"  onSubmit={e =>
                this.props.onPortalEditUpdate(
                  this.props.editData,
                  e.target[0].value
                )
              }>
 
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
    Portal
    </Form.Label>
    <Col sm={10}  className="form-input">
      <Form.Control type="Text" placeholder="Portal" name="PortalName" required 
      value={this.state.PortalData}
                  onChange={value => this.onChange(value)}/>
    </Col>
  </Form.Group>
 
  <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Status
      </Form.Label>
      <Col sm={10}>
        <Form.Check
        inline
          type="radio"
          label="enable"
          value="1"
          name="status"    
        
        onChange={this.onStatusChange}   
        required
        checked={this.state.Status==1}
        />
        <Form.Check
        inline
          type="radio"
          label="disable"
          value="0"
          name="status" 
          onChange={this.onStatusChange}  
          required      
          checked={this.state.Status==0}
        />
      </Col>
    </Form.Group>

  <Form.Group as={Row} id="form-submit-button">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Update</Button>
    </Col>
  </Form.Group>
  <Form.Group as={Row} id="form-cancel-button">
    <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
      <Button type="reset" onClick={this.props.onFormEditClose}>cancel</Button>
    </Col>
  </Form.Group>
</Form></div>
      </div>
    );
  }
}

export default AdminPortalForm;
