import React, { Component } from 'react';


import './App.css'


import TextEditor from './components/TextEditor/TextEditor'
import CodeEditor from './components/CodeEditor/CodeEditor'


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
