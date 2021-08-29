import React, { Component } from "react";
import "./CompanyFormEdit.css";
import axios from "axios";
import { Form, Button, Col, Row } from "react-bootstrap";

class CompanyFormEdit extends Component {
  state = {

    status: "",
    countryData: [],
    stateData: [],
    cityData: [],
    filteredCountryData: [],
    filteredStateData: [],
    filteredCityData: [],

    CompanyNameData: this.props.editData["CompanyName"],
    AddressData: this.props.editData["Address"],
    PostalCodeData: this.props.editData["PostalCode"],
    WebsiteData: this.props.editData["Website"],
    EmailData: this.props.editData["Email"],
    ContactPersonData: this.props.editData["ContactPerson"],
    ContactNoData: this.props.editData["ContactNo"],
    FaxNoData: this.props.editData["FaxNo"],
    PanNoData: this.props.editData["PanNo"],
    GSTNoData: this.props.editData["GSTNo"],
    CINNoData: this.props.editData["CINNo"],
  };
  onCompanyNameDataChange(e) {
    this.setState({ CompanyNameData: e.target.value });
  }
  onAddressDataChange(e) {
    this.setState({ AddressData: e.target.value });
  }
  onPostalCodeDataChange(e) {
    this.setState({ PostalCodeData: e.target.value });
  }
  onWebsiteDataChange(e) {
    this.setState({ WebsiteData: e.target.value });
  }
  onEmailDataChange(e) {
    this.setState({ EmailData: e.target.value });
  }
  onContactPersonDataChange(e) {
    this.setState({ ContactPersonData: e.target.value });
  }
  onContactNoDataChange(e) {
    this.setState({ ContactNoData: e.target.value });
  }
  onFaxNoDataChange(e) {
    this.setState({ FaxNoData: e.target.value });
  }
  onPanNoDataChange(e) {
    this.setState({ PanNoData: e.target.value });
  }
  onGSTNoDataChange(e) {
    this.setState({ GSTNoData: e.target.value });
  }
  onCINNoDataChange(e) {
    this.setState({ CINNoData: e.target.value });
  }


  loadCountryInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/country", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ countryData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadStateInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/state", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ stateData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadCityInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/city", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ cityData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentWillMount() {
    this.loadCountryInfo();
    this.loadStateInfo();
    this.loadCityInfo();
  }
  onCountryChange(e) {
    console.log(e.target.value);
    let currentCountry = e.target.value;

    let filteredState = this.state.stateData.filter(
      data => data["country"][0]["_id"] == currentCountry
    );
    this.setState({ filteredStateData: filteredState });

  }
  onStateChange(e) {
    console.log(e.target.value);
    let currentState = e.target.value;
    let filteredCity = this.state.cityData.filter(
      data => data["state"][0]["_id"] == currentState
    );
    this.setState({ filteredCityData: filteredCity });
  }

  render() {
    return (
      <React.Fragment>
        <h2 id="role-form-title">Edit Project Bid Details</h2>
        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onCompanyEditUpdate(this.props.editData, e)
            }
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Company Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Company Name"
                  name="CompanyName"
                  value={this.state.CompanyNameData}
                  onChange={value => this.onCompanyNameDataChange(value)}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Address
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="textarea"
                  rows="3"
                  plassholder="address"
                  required
                  value={this.state.AddressData}
                  onChange={value => this.onAddressDataChange(value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Country
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="select"
                  name="country"
                  onChange={this.onCountryChange.bind(this)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.countryData.map((data, index) => (
                    <option key={index} value={data["_id"]}>{data["CountryName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                State
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="select"
                  name="state"
                  required
                  onChange={this.onStateChange.bind(this)}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.filteredStateData.map((data, index) => (
                    <option key={index} value={data["_id"]}>{data["StateName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                City
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="state" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.filteredCityData.map((data, index) => (
                    <option key={index} value={data["_id"]}>{data["CityName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                PostalCode
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="number" placeholder="PostalCode" required value={this.state.PostalCodeData}
                  onChange={value => this.onPostalCodeDataChange(value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Website
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="Website" required value={this.state.WebsiteData}
                  onChange={value => this.onWebsiteDataChange(value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="email" placeholder="Email" required value={this.state.EmailData}
                  onChange={value => this.onEmailDataChange(value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Contact Person
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Contact Person"
                  required
                  value={this.state.ContactPersonData}
                  onChange={value => this.onContactPersonDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Contact No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="Contact No" required value={this.state.ContactNoData}
                  onChange={value => this.onContactNoDataChange(value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                FaxNo
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="FaxNo" required value={this.state.FaxNoData}
                  onChange={value => this.onFaxNoDataChange(value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                PanCard No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder=" PanCard No  "
                  required
                  value={this.state.PanNoData}
                  onChange={value => this.onPanNoDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                GSTNo
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="GSTNo" required value={this.state.GSTNoData}
                  onChange={value => this.onGSTNoDataChange(value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                CINNo
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="CINNo" required value={this.state.CINNoData}
                  onChange={value => this.onCINNoDataChange(value)} />
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

export default CompanyFormEdit;
