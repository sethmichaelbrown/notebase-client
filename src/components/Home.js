import React, { Component } from 'react'
import { connect } from 'react-redux'


import CodeEditor from './codeEditor/CodeEditor'
import TextEditor from './textEditor/TextEditor'



class Home extends Component {


  render() {
    return (
      <div className="Home">
        <h1>Hello from Home.js</h1>

        {this.props.displayTextEditor ?
          <div className="col-md-6">
            <TextEditor />
          </div> : ''}

        {this.props.displayCodeEditor ?
          <div className="col-md-6">
            <CodeEditor />
          </div> : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
