import React, { Component } from 'react'
import { Auth } from "aws-amplify"
import { Button, FormGroup, FormControl, FormLabel, Alert } from "react-bootstrap"
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from '../Home'

class SignUp extends Component {



  render() {
    return (
      <div className="SignUp">
        <h1>Hello from SignUp!</h1>

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
