import React, { Component } from "react";
import "./AdminRoleForm.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Form,Button } from "react-bootstrap";

class AdminRoleForm extends Component {
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
        <h2 id="role-form-title">Add Role Details</h2>
        <div id="role-form-outer-div">
          <div id="role-form-inner-div">
            <form action="" onSubmit={this.props.onRoleSubmit}>
              <label>Company * &nbsp;</label>
              {/* <input type="text" name="" className="role-form-input" /> */}
              <select name="CompanyID" className="role-form-input" required>
                <option value="1">Bhavi Technologies</option>
                <option value="2">Bhavi Consultancy</option>
              </select>
              <br />

              <label>
                {" "}
                Role
                *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  name="Role"
                  className="role-form-input"
                  required
                />
              </label>
              <input type="submit" className="role-form-input-button" />
              {/* <Link to="/admin/role/table"> */}

              {/* </Link> */}
            </form>
            <button
              className="role-form-input-button role-form-cancel-button"
              onClick={this.props.onFormClose}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminRoleForm;
