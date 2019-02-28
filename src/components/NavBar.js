import React, { Component } from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../App.css'


class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        {console.log(this.props)}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">noteBase</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">My Account</Nav.Link>
          </Nav>
          <Form inline>
            <Button className='mr-1' variant="outline-light">Sign Up</Button>
            <Button onClick={this.props.loginClick} variant="outline-light">Login</Button>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick: () => dispatch({ type: 'loginClick' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
