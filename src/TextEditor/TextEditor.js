import React, { Component } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'


class TextEditor extends Component {
  state = {
    text: ''
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div className="TextEditor">
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange} />
      </div>
    )
  }
}

export default TextEditor