import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css'




class Home extends Component {


  render() {
    return (
      <div className="Home">
        <h2>Log in to see your bases</h2>
        <h2>or get started by creating a <Link to='/editor'>new base</Link></h2>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayCodeEditor: state.displayCodeEditor,
    displayTextEditor: state.displayTextEditor,
    displayLogin: state.displayLogin,
    displaySignUp: state.displaySignUp,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginClick: () => dispatch({ type: 'loginClick' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
