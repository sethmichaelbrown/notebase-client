import React, { Component } from 'react'
import { Auth } from "aws-amplify"
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login container">
        <div className="row">
          <div className="col-md-8 col-sm-10">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button className='mr-1' variant='outline-danger'>Cancel</Button>
              <Button variant='outline-dark' disabled={!this.validateForm()} type="submit">Login</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
