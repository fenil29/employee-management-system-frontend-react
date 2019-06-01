import React, { Component } from "react";
// import "./AdminPositionForm.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Form,Button } from "react-bootstrap";

class AdminPositionForm extends Component {
  state = {
    PositionData: this.props.editData["PositionName"]
  };
  onChange(e) {
    this.setState({ PositionData: e.target.value });
  }

  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      <div>
        {/* <Form>
       <Form.Group controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>
     
       <Form.Group controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       <Form.Group controlId="formBasicChecbox">
         <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
       <Button variant="primary" type="submit">
         Submit
       </Button>
     </Form>; */}
        <h2 id="role-form-title">Edit Role Details</h2>
        <div id="role-form-outer-div">
          <div id="role-form-inner-div">
            <form
              action=""
              onSubmit={e =>
                this.props.onPositionEditUpdate(
                  this.props.editData,
                  e.target[0].value,
                  e.target[1].value
                )
              }
            >
              <label>Company * &nbsp;</label>
              {/* <input type="text" name="" className="role-form-input" /> */}
              <select name="CompanyID" className="role-form-input" required>
                <option
                  value="1"
                  selected={this.props.editData["CompanyID"] == 1}
                >
                  Bhavi Technologies
                </option>
                <option
                  value="2"
                  selected={this.props.editData["CompanyID"] == 2}
                >
                  Bhavi Consultancy
                </option>
              </select>
              <br />

              <label>
                {/* {" "}this.props.editData["Role"] */}
                Position *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  name="Position"
                  className="role-form-input"
                  required
                  value={this.state.PositionData}
                  onChange={value => this.onChange(value)}
                />
              </label>
              <input
                type="submit"
                className="role-form-input-button"
                value="Update"
              />
              {/* <Link to="/admin/role/table"> */}

              {/* </Link> */}
            </form>
            <button
              className="role-form-input-button role-form-cancel-button"
              onClick={this.props.onFormEditClose}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPositionForm;
