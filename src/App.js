import React, { Component } from 'react'
import './App.css'
import { Auth } from 'aws-amplify'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


// import TextEditor from './components/textEditor/TextEditor'
// import CodeEditor from './components/codeEditor/CodeEditor'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/login/Login'
import NotFound from './components/NotFound'
import SignUp from './components/login/SignUp'
import Editor from './components/editor/Editor'


class App extends Component {

  state={
    userHasAuthenticated: false,
    isAuthenticating: true
  }

  async componentDidMount() {
    try {
      await Auth.currentSession()
      console.log('Hello')
      this.userHasAuthenticated(true)
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }


  render() {
    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/editor" component={Editor} />
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
