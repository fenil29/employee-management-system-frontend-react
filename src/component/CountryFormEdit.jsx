import React, { Component } from "react";
// import "./CountryForm.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";

class CountryForm extends Component {
  state = {
    CountryData: this.props.editData["CountryName"]
  };
  onChange(e) {
    this.setState({ CountryData: e.target.value });
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit Country Details</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onCountryEditUpdate(
                this.props.editData,
                e
                //   e.target[1].value
              )
            }
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Country
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Country"
                  name="CountryName"
                  required
                  value={this.state.CountryData}
                  onChange={value => this.onChange(value)}
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
                <Button type="reset" onClick={this.props.onFormEditClose}>
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

export default CountryForm;
