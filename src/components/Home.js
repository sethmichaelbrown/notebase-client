import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'
import uuid from 'uuid'




class Home extends Component {

  newId = () => {
    console.log(uuid().split('-')[0])
  }

  render() {
    return (
      <div className="Home">
        

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayCodeEditor: state.displayCodeEditor,
    displayTextEditor: state.displayTextEditor,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick: () => dispatch({ type: 'loginClick' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
