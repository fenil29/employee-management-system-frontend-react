import React, { Component } from "react";
import "./CompanyForm.css";
import axios from "axios";

import { Form, Button, Col, Row } from "react-bootstrap";

class CompanyForm extends Component {
  state = {
    countryData: [],
    stateData: [],
    cityData: [],
    filteredCountryData: [],
    filteredStateData: [],
    filteredCityData: [],
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
      <div>
        <h2 id="role-form-title">Add Company Details</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onCompanySubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Company Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Company Name"
                  name="CompanyName"
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
                  <option disabled selected>
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
                <Form.Control type="number" placeholder="PostalCode" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Website
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="Website" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="email" placeholder="Email" required />
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
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Contact No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="Contact No" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                FaxNo
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="FaxNo" required />
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
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                GSTNo
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="GSTNo" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                CINNo
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control type="Text" placeholder="CINNo" required />
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

export default CompanyForm;
