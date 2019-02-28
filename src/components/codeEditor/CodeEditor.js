import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';



class CodeEditor extends Component {

  state = {
    options: {
      mode: 'xml',
      theme: 'material',
      lineNumbers: true
    },
    value: ''
  }

  render() {
    return (
      <CodeMirror
        value={this.state.value}
        options={this.state.options}
        onBeforeChange={(editor, data, value) => {
          this.setState({ value });
        }}
        onChange={(editor, data, value) => {
        }}/>

    )

  }

}

export default CodeEditor