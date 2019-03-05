import React, { Component } from 'react'
// import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
// import { LinkContainer } from 'react-router-bootstrap'
// import { Route, Switch } from 'react-router-dom'
import { Auth } from "aws-amplify"
// import { withAuthenticator } from 'aws-amplify-react'

import './styles/navbar.css'
import '../App.css'

import logo from './svgs/noteBaseLogo.svg'


class NavBar extends Component {

  handleLogout = async () => {
    try {
      await Auth.signOut()
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className="Nav">
        <nav class="navbar navbar-expand-* navbar-light">
          <a class="navbar-brand" href="#">
            <img src={logo} class="d-inline-block align-top" alt=""></img>
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
        
            </ul>

          </div>
        </nav>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeClick: () => dispatch({ type: 'homeClick' })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
