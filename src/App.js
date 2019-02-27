import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'


import TextEditor from './components/textEditor/TextEditor'
import CodeEditor from './components/codeEditor/CodeEditor'
import NavBar from './components/NavBar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          {this.props.displayTextEditor ?
            <div className="col-md-6">
              <TextEditor />
            </div> : ''}
          {this.props.displayCodeEditor ?
            <div className="col-md-6">
              <CodeEditor />
            </div> : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tester: state.tester
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTester: () => dispatch({ type: 'toFalse' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
