import React, { Component } from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch } from 'react-router-dom'
import { Auth } from "aws-amplify"
import { withAuthenticator } from 'aws-amplify-react'
import '../App.css'


import Home from './Home'
import NotFound from './NotFound'


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

        <Navbar bg="dark" variant="dark">
          <LinkContainer to='/'>
            <Navbar.Brand onClick={this.props.homeClick}>noteBase</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">My Account</Nav.Link>
          </Nav>
          <Form inline>
            <Button onClick={this.handleLogout} variant="outline-light">Logout</Button>
          </Form>
        </Navbar>

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
