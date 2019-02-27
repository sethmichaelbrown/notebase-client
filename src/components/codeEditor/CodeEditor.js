import React, { Component } from 'react'
import MonacoEditor from 'react-monaco-editor';



class CodeEditor extends Component {
 
  state = {
    code: '// start typing here...'
  }

  editorDidMount(editor, monaco) {
    // console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="CodeEditor">
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount} />

      </div>

    )
  }
}

export default CodeEditor