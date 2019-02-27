import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import { Container } from 'react-bootstrap'


import 'react-quill/dist/quill.snow.css'
import './App.css'


import TextEditor from './TextEditor/TextEditor'

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Hello from App.js</h1>
        <div className="row">
          <div className="col-md-6">
            <TextEditor />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
