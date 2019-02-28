import React, { Component } from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch } from 'react-router-dom'
import '../App.css'

import Login from './login/Login'
import Home from './Home'


class NavBar extends Component {
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
            <Button className='mr-1' variant="outline-light">Sign Up</Button>
            {this.props.displayLogin ? '' :
              <LinkContainer to='/login'>
                <Button onClick={this.props.loginClick} variant="outline-light">Login</Button>
              </LinkContainer>}
          </Form>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayLogin: state.displayLogin,
    displaySignUp: state.displaySignUp,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick: () => dispatch({ type: 'loginClick' }),
    homeClick: () => dispatch({ type: 'homeClick' })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
