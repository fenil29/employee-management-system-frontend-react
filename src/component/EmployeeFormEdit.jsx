import React, { Component } from "react";
import "./EmployeeFormEdit.css";
import axios from "axios";
import { Form, Button, Col, Row } from "react-bootstrap";

class EmployeeFormEdit extends Component {
  state = {
    roleData: [],
    positionData: [],
    departmentData: [],
    GenderData: this.props.editData["Gender"],

    EmailData: this.props.editData["Email"],
    PasswordData: "",

    FirstNameData: this.props.editData["FirstName"],
    MiddleNameData: this.props.editData["MiddleName"],
    LastNameData: this.props.editData["LastName"],
    DOBData: this.props.editData["DOB"].slice(0, 10),
    ContactNoData: this.props.editData["ContactNo"],
    EmployeeCodeData: this.props.editData["EmployeeCode"],

    DateOfJoiningData: this.props.editData["DateOfJoining"].slice(0, 10),
    TerminateDateData: this.props.editData["TerminateDate"].slice(0, 10)

    // value={this.state.EmployeeTitleData}
    // onChange={value => this.onEmployeeTitleDataChange(value)}
  };
  onEmailDataChange(e) {
    this.setState({ EmailData: e.target.value });
  }

  onFirstNameDataChange(e) {
    this.setState({ FirstNameData: e.target.value });
  }
  onMiddleNameDataChange(e) {
    this.setState({ MiddleNameData: e.target.value });
  }
  onLastNameDataChange(e) {
    this.setState({ LastNameData: e.target.value });
  }
  onContactNoDataChange(e) {
    this.setState({ ContactNoData: e.target.value });
  }
  onEmployeeCodeDataChange(e) {
    this.setState({ EmployeeCodeData: e.target.value });
  }
  onPasswordDataChange(e) {
    this.setState({ PasswordData: e.target.value });
  }

  loadRoleInfo = () => {
    axios
      .get("https://employee-management-fk-api.herokuapp.com/api/role", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ roleData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadPositionInfo = () => {
    axios
      .get("https://employee-management-fk-api.herokuapp.com/api/position", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ positionData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadDepartmentInfo = () => {
    axios
      .get("https://employee-management-fk-api.herokuapp.com/api/department", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ departmentData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  onGenderChange = e => {
    this.setState({ GenderData: e.target.value });
    this.props.onGenderChange(e);
  };
  onDOBDataChange = e => {
    console.log(e.target.value);
    this.setState({ DOBData: e.target.value });
  };
  onDateOfJoiningDataChange = e => {
    console.log(e.target.value);
    this.setState({ DateOfJoiningData: e.target.value });
  };
  onTerminateDateDataChange = e => {
    console.log(e.target.value);
    this.setState({ TerminateDateData: e.target.value });
  };
  onGenderChange = e => {
    this.setState({ GenderData: e.target.value });
    this.props.onGenderChange(e);
  };
  componentWillMount() {
    this.loadRoleInfo();
    this.loadPositionInfo();
    this.loadDepartmentInfo();
  }
  render() {
    return (
      <React.Fragment>
        <h2 id="role-form-title">Edit Employee Details</h2>
        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onEmployeeEditUpdate(this.props.editData, e)
            }
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  value={this.state.EmailData}
                  onChange={value => this.onEmailDataChange(value)}

                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={this.state.PasswordData}
                  onChange={value => this.onPasswordDataChange(value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Account access
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option
                    value="1"
                    selected={this.props.editData["Account"] == 1}
                  >
                    Admin
                  </option>
                  <option
                    value="2"
                    selected={this.props.editData["Account"] == 2}
                  >
                    HR
                  </option>
                  <option
                    value="3"
                    selected={this.props.editData["Account"] == 3}
                  >
                    Employee
                  </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Role
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="role">
                  <option disabled selected>
                    Select your option
                  </option>
                  {this.state.roleData.map((data, index) => (
                    <option
                      key={index}
                      value={data["_id"]}
                      selected={
                        this.props.editData["role"][0]["_id"] == data["_id"]
                      }
                    >
                      {data["RoleName"]}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  value="male"
                  name="gender"
                  onChange={this.onGenderChange}
                  checked={this.state.GenderData == "male"}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  value="female"
                  name="gender"
                  onChange={this.onGenderChange}
                  checked={this.state.GenderData == "female"}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                  value={this.state.FirstNameData}
                  onChange={value => this.onFirstNameDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Middle Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Middle Name"
                  required
                  value={this.state.MiddleNameData}
                  onChange={value => this.onMiddleNameDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  required
                  value={this.state.LastNameData}
                  onChange={value => this.onLastNameDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                DOB
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="DOB"
                  required
                  //   value={this.props.editData["DOB"].slice(0, 10)}
                  value={this.state.DOBData}
                  onChange={value => this.onDOBDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Contact No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Contact No "
                  required
                  value={this.state.ContactNoData}
                  onChange={value => this.onContactNoDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Employee Code
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Employee Code"
                  required
                  value={this.state.EmployeeCodeData}
                  onChange={value => this.onEmployeeCodeDataChange(value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Department
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="department" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.departmentData.map((data, index) => (
                    <option
                      key={index}
                      value={data["_id"]}
                      selected={
                        this.props.editData["department"][0]["_id"] ==
                        data["_id"]
                      }
                    >
                      {data["DepartmentName"]}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Position
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="position" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.positionData.map((data, index) => (
                    <option
                      key={index}
                      value={data["_id"]}
                      selected={
                        this.props.editData["position"][0]["_id"] == data["_id"]
                      }
                    >
                      {data["PositionName"]}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Date Of Joining
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="Date Of Joining"
                  required
                  //   value={this.props.editData["DateOfJoining"].slice(0, 10)}
                  value={this.state.DateOfJoiningData}
                  onChange={value => this.onDateOfJoiningDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Terminate Date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="Terminate Date"
                  //   value={this.props.editData["TerminateDate"].slice(0, 10)}
                  value={this.state.TerminateDateData}
                  onChange={value => this.onTerminateDateDataChange(value)}
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
                <Button type="reset" onClick={this.props.onFormEditClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default EmployeeFormEdit;
