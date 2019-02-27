import React, { Component } from 'react';


import './App.css'


import TextEditor from './TextEditor/TextEditor'
import CodeEditor from './CodeEditor/CodeEditor'


class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Hello from App.js</h1>
        <div className="row">
          <div className="col-md-6">
            <TextEditor />
          </div>
          <div className="col-md-6">
            <CodeEditor />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
