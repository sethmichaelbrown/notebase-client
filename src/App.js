import React, { Component } from 'react'
import './App.css'
import { Auth } from 'aws-amplify'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withAuthenticator } from 'aws-amplify-react'




// import TextEditor from './components/textEditor/TextEditor'
// import CodeEditor from './components/codeEditor/CodeEditor'
import NavBar from './components/NavBar'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Editor from './components/editor/Editor'


class App extends Component {



  render() {

    return (

      <div className="App">
        <NavBar />

        <Switch>
          <Route exact strict path="/" component={Home} />
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
 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loginClick: () => dispatch({ type: 'loginClick' })
  }
}

export default withAuthenticator(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)), false)
