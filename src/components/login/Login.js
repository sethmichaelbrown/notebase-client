import React, { Component } from 'react'
import { Auth } from "aws-amplify"
import { Button, FormGroup, FormControl, FormLabel, Alert } from "react-bootstrap"
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from '../Home'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      displayLoginWarning: false,
      error: ''
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleLoginError = (error) => {
    const newState = { ...this.state }
    newState.error = error.message
    newState.displayLoginWarning = true
    this.setState({ displayLoginWarning: newState.displayLoginWarning })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await Auth.signIn(this.state.email, this.state.password)
      this.props.userAuthenticated()


    } catch (error) {
      this.handleLoginError(error)
    }
  }

  render() {

    if (this.props.isAuthenticated) {
      return <Redirect to='/' render={() => <Home />} />
    }


    return (
      <div className="Login">
        {console.log('Login')}
        <div className="login container">
          <div className="row">
            {this.state.displayLoginWarning ?
              <Alert variant='danger'>
                {this.state.error}
                Reset your password<Alert.Link href="#"> here </Alert.Link>
                if you continue having trouble logging in.
            </Alert>
              : ''}
          </div>
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
              <div className="sign">
                <span>New to noteBase? <Link to='/signup'>Create an account </Link>for free!</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userAuthenticated: () => dispatch({ type: 'authenticated' }),


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
