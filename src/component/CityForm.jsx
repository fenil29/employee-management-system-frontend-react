import React, { Component } from "react";
import "./CityForm.css";
import axios from "axios";

import { Form, Button, Col, Row } from "react-bootstrap";

class CityForm extends Component {
  state = {
    stateData: [],
    filteredStateData: [],
    countryData: [],
    filteredCountryData: []
  };

  onChange(e) {
    this.setState({ CityData: e.target.value });
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

  componentWillMount() {
    this.loadCountryInfo();
    this.loadStateInfo();
  }
  onCountryChange(e) {
    console.log(e.target.value);
    let currentCountry = e.target.value;
    let filteredState = this.state.stateData.filter(
      data => data["country"][0]["_id"] == currentCountry
    );
    this.setState({ filteredStateData: filteredState });
  }
  render() {
    return (
      <div>
        <h2 id="role-form-title">Add City Details</h2>

        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onCitySubmit}>
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
                    <option value={data["_id"]}>{data["CountryName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                State
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="state" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.filteredStateData.map((data, index) => (
                    <option value={data["_id"]}>{data["StateName"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                City
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="City"
                  name="City"
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

export default CityForm;
