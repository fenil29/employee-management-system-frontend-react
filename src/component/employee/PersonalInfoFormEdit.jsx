import React, { Component } from "react";
import "./PersonalInfoFormEdit.css";
import axios from "axios";
import { Form, Button, Col, Row } from "react-bootstrap";

class PersonalInfoFormEdit extends Component {
  state = {
    // status: '',
    // portalsInfo:[],
    // PersonalInfoTitleData:this.props.editData["PersonalInfoTitle"],
    // PersonalInfoURLData:this.props.editData["PersonalInfoURL"],
    // PersonalInfoDescriptionData:this.props.editData["PersonalInfoDesc"],
    // EstimatedTimeData:this.props.editData["EstimatedTime"],
    // RemarkData:this.props.editData["Remark"],
    GenderData: this.props.editData["Gender"],

    EmailData: this.props.editData["Email"],
    FirstNameData: this.props.editData["FirstName"],
    MiddleNameData: this.props.editData["MiddleName"],
    LastNameData: this.props.editData["LastName"],
    DOBData: this.props.editData["DOB"].slice(0, 10),
    ContactNoData: this.props.editData["ContactNo"],
    EmergencyContactNoData: this.props.editData["EmergencyContactNo"] || "",
    PANcardNoData: this.props.editData["PANcardNo"] || "",
    HobbiesData: this.props.editData["Hobbies"] || "",
    PresentAddressData: this.props.editData["PresentAddress"] || "",
    PermanetAddressData: this.props.editData["PermanetAddress"] || ""

    // value={this.state.PersonalInfoTitleData}
    // onChange={value => this.onPersonalInfoTitleDataChange(value)}
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
  onPANcardNoDataChange(e) {
    this.setState({ PANcardNoData: e.target.value });
  }
  onEmergencyContactNoDataChange(e) {
    this.setState({ EmergencyContactNoData: e.target.value });
  }
  onHobbiesDataChange(e) {
    this.setState({ HobbiesData: e.target.value });
  }
  onPresentAddressDataChange(e) {
    this.setState({ PresentAddressData: e.target.value });
  }
  onPresentAddressDataChange(e) {
    this.setState({ PresentAddressData: e.target.value });
  }
  onPermanetAddressDataChange(e) {
    this.setState({ PermanetAddressData: e.target.value });
  }

  onGenderChange = e => {
    this.setState({ GenderData: e.target.value });
    this.props.onGenderChange(e);
  };
  onDOBDataChange = e => {
    console.log(e.target.value);
    this.setState({ DOBData: e.target.value });
  };

  componentWillMount() {}   
  render() {
    return (
      <React.Fragment>
        <h2 id="role-form-title">Edit PersonalInfo Details</h2>
        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onPersonalInfoEditUpdate(this.props.editData, e)
            }
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                  disabled
                  value={this.state.FirstNameData}
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
                  disabled
                  value={this.state.MiddleNameData}
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
                  disabled
                  required
                  value={this.state.LastNameData}
                />
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
                Emergency Contact No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Emergency Contact No"
                  required
                  value={this.state.EmergencyContactNoData}
                  onChange={value => this.onEmergencyContactNoDataChange(value)}
                />
              </Col>
            </Form.Group>

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
                PAN Card No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="PAN Card No"
                  required
                  value={this.state.PANcardNoData}
                  onChange={value => this.onPANcardNoDataChange(value)}
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
                Blood Group
              </Form.Label>

              <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option
                    value="A+"
                    selected={this.props.editData["BloodGroup"] == "A+"}
                  >
                    A+
                  </option>
                  <option
                    value="A-"
                    selected={this.props.editData["BloodGroup"] == "A-"}
                  >
                    A-
                  </option>
                  <option
                    value="B+"
                    selected={this.props.editData["BloodGroup"] == "B+"}
                  >
                    B+
                  </option>
                  <option
                    value="B-"
                    selected={this.props.editData["BloodGroup"] == "B-"}
                  >
                    B-
                  </option>
                  <option
                    value="AB+"
                    selected={this.props.editData["BloodGroup"] == "AB+"}
                  >
                    AB+
                  </option>
                  <option
                    value="AB-"
                    selected={this.props.editData["BloodGroup"] == "AB-"}
                  >
                    AB-
                  </option>
                  <option
                    value="O+"
                    selected={this.props.editData["BloodGroup"] == "O+"}
                  >
                    O+
                  </option>
                  <option
                    value="O-"
                    selected={this.props.editData["BloodGroup"] == "O-"}
                  >
                    O-
                  </option>
                  {/* 
    A+
    A-
    B+
    B-
    AB+
    AB-
    O+
    O- */}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Hobbies
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Hobbies"
                  required
                  value={this.state.HobbiesData}
                  onChange={value => this.onHobbiesDataChange(value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Present Address
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="textarea"
                  rows="3"
                  plassholder="Present Address"
                  required
                  value={this.state.PresentAddressData}
                  onChange={value => this.onPresentAddressDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Permanet Address
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="textarea"
                  rows="3"
                  plassholder=" Permanet Address"
                  required
                  value={this.state.PermanetAddressData}
                  onChange={value => this.onPermanetAddressDataChange(value)}
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
        {/* </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default PersonalInfoFormEdit;
