import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'


import TextEditor from './components/textEditor/TextEditor'
import CodeEditor from './components/codeEditor/CodeEditor'
import NavBar from './components/NavBar'
import Login from './components/login/Login'


class App extends Component {


  render() {
    return (
      <div className="App">
     
        
        <NavBar />
        
        <div className="row">



        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayCodeEditor: state.displayCodeEditor,
    displayTextEditor: state.displayTextEditor,
    displayLogin: state.displayLogin,
    displaySignUp: state.displaySignUp,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick: () => dispatch({ type: 'loginClick' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
