import React, { Component } from 'react';
import ReactQuill from 'react-quill'


class TextEditor extends Component {
  state = {
    text: ''
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  
  render() {
    return (
      <ReactQuill
        value={this.state.text}
        onChange={this.handleChange} />
    )
  }
}

export default TextEditor