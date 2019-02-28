import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../App.css'

import CodeEditor from './codeEditor/CodeEditor'
import TextEditor from './textEditor/TextEditor'


class Editor extends Component {


  render() {
    return (
      <div className="Editor">
        <div className="row container">
          <div className="editor-div">
            {this.props.displayTextEditor ?
              <div className="col-md-6 editor-div-item">
                <TextEditor />
              </div> : ''}
            {this.props.displayCodeEditor ?
              <div className="col-md-6 editor-div-item">
                <CodeEditor />
              </div> : ''}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
