import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col, Row } from "react-bootstrap";

class StateForm extends Component {
  state = {
    StateData: this.props.editData["StateName"],
    countryInfo: []
  };
  countryData = [];
  loadCountryInfo = () => {
    axios
      .get("https://employee-management-fk-api.herokuapp.com/api/country", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.countryData = response.data;

        this.setState({ portalsInfo: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentWillMount() {
    this.loadCountryInfo();
  }
  onChange(e) {
    this.setState({ StateData: e.target.value });
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit State Details</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e => this.props.onStateEditUpdate(this.props.editData, e)}
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Country
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="country" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.countryData.map((data, index) => (
                    <option
                      value={data["_id"]}
                      selected={
                        this.props.editData["country"][0]["_id"] == data["_id"]
                      }
                    >
                      {data["CountryName"]}
                    </option>
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
                  type="Text"
                  placeholder="State"
                  name="StateName"
                  required
                  value={this.state.StateData}
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

export default StateForm;
