import React, { Component } from 'react';


import './App.css'


import TextEditor from './components/textEditor/TextEditor'
import CodeEditor from './components/codeEditor/CodeEditor'
import NavBar from './components/NavBar'


class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar />
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
