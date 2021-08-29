import React, { Component } from "react";
import axios from "axios";

import { Form, Button, Col, Row } from "react-bootstrap";

class SalaryForm extends Component {
  state = {
    employeeData : [],
   
    
  }
 
  loadEmployeeInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/employee", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ employeeData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  componentWillMount() {
    this.loadEmployeeInfo();
    // this.loadPositionInfo();
    // this.loadDepartmentInfo();
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Add Salary Details</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onSalarySubmit}>

          <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Select Employee
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="select"
                  required
                >
                   <option value="" disabled selected>Select your option</option>
                  {this.state.employeeData.map((data, index) => (
                    <option key={index} value={data["_id"]}>{data["FirstName"]+" "+data["MiddleName"]+" "+data["LastName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>


            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Basic Salary
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="number"
                  placeholder="Basic Salary"
                  required
                />
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Bank Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Bank Name"
                  required
                />
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Account No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Account No"
                  required
                />
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Re-Enter Account No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Re-Enter Account No"
                  required
                />
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Account Holder Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Account Holder Name"
                  required
                />
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              IFSC Code
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="IFSC Code"
                  required
                />
              </Col>
            </Form.Group>

            
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Tax Deduction
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="number"
                  placeholder="Basic Salary"
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

        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default SalaryForm;
