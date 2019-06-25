import React, { Component } from "react";
// import "./EducationFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class EducationForm extends Component {
  state = {
    // EducationData: this.props.editData["EducationName"],

    SchoolUniversityData: this.props.editData["SchoolUniversity"],
    DegreeData: this.props.editData["Degree"],
    GradeData: this.props.editData["Grade"],
    PassingOfYearData: this.props.editData["PassingOfYear"]
  };
  onSchoolUniversityDataChange(e) {
    this.setState({ SchoolUniversityData: e.target.value });
  }
  onDegreeDataChange(e) {
    this.setState({ DegreeData: e.target.value });
  }
  onGradeDataChange(e) {
    this.setState({ GradeData: e.target.value });
  }
  onPassingOfYearDataChange(e) {
    this.setState({ PassingOfYearData: e.target.value });
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit Education Details</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onEducationEditUpdate(this.props.editData, e)
            }
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                School / University
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="School / University "
                  required
                  value={this.state.SchoolUniversityData}
                  onChange={value => this.onSchoolUniversityDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Degree
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Degree "
                  required
                  value={this.state.DegreeData}
                  onChange={value => this.onDegreeDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Grade
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Grade"
                  required
                  value={this.state.GradeData}
                  onChange={value => this.onGradeDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Passing Of Year
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Passing Of Year"
                  required
                  value={this.state.PassingOfYearData}
                  onChange={value => this.onPassingOfYearDataChange(value)}
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

export default EducationForm;
