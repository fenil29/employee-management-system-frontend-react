import React, { Component } from "react";
import "./AdminPortalForm.css";
import { Form, Button, Col, Row } from "react-bootstrap";
// import Form from 'react-bootstrap/Form'

class AdminPortalForm extends Component {
  state = {
    status: ""
  };
  handleChange = event => {
    this.setState({
      status: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h2 id="role-form-title">Add Portal Details</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onPortalSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Portal
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Portal"
                  name="Portal"
                  required
                />
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
                  onChange={this.props.onStatusChange}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  label="disable"
                  value="0"
                  name="status"
                  onChange={this.props.onStatusChange}
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

export default AdminPortalForm;
