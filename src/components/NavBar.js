import React, { Component } from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch } from 'react-router-dom'
import '../App.css'

import Login from './login/Login'
import Home from './Home'
import NotFound from './NotFound'


class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        {console.log('NavBar')}

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
            {this.props.isAuthenticated ?
              <Button onClick={this.props.logoutClick} variant="outline-light">Logout</Button>
              :
              <React.Fragment>
                <div className="loginSignUpBtns">
                  <LinkContainer to='/signup'>
                    <Button className='mr-1' variant="outline-light">Sign Up</Button>
                  </LinkContainer>
                  <LinkContainer to='/login'>
                    <Button variant="outline-light">Login</Button>
                  </LinkContainer>
                </div>
              </React.Fragment>}
          </Form>
        </Navbar>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayLogin: state.displayLogin,
    displaySignUp: state.displaySignUp,
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick: () => dispatch({ type: 'loginClick' }),
    logoutClick: () => dispatch({ type: 'logoutClick' }),
    homeClick: () => dispatch({ type: 'homeClick' })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
