import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import { Container } from 'react-bootstrap'


import 'react-quill/dist/quill.snow.css'
import './App.css';


class App extends Component {

  state = {
    text: ''
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div className="App">
        <div className="row container">
          <div className="col-md-6">
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
