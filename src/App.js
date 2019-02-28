import React, { Component } from 'react'
import './App.css'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


// import TextEditor from './components/textEditor/TextEditor'
// import CodeEditor from './components/codeEditor/CodeEditor'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/login/Login'
import NotFound from './components/NotFound'
import SignUp from './components/login/SignUp'


class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayCodeEditor: state.displayCodeEditor,
    displayTextEditor: state.displayTextEditor,
    displayLogin: state.displayLogin,
    displaySignUp: state.displaySignUp,
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick: () => dispatch({ type: 'loginClick' })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
