import React, { Component } from 'react'
import AceEditor from 'react-ace';

import brace from 'brace';

import 'brace/mode/java'
import 'brace/mode/javascript'
import 'brace/mode/python'
import 'brace/mode/xml'
import 'brace/mode/ruby'
import 'brace/mode/sass'
import 'brace/mode/markdown'
import 'brace/mode/mysql'
import 'brace/mode/json'
import 'brace/mode/html'
import 'brace/mode/handlebars'
import 'brace/mode/golang'
import 'brace/mode/csharp'
import 'brace/mode/coffee'
import 'brace/mode/css'

import 'brace/theme/github'
import 'brace/theme/monokai'
import 'brace/theme/tomorrow'
import 'brace/theme/kuroir'
import 'brace/theme/twilight'
import 'brace/theme/xcode'
import 'brace/theme/textmate'
import 'brace/theme/solarized_dark'
import 'brace/theme/solarized_light'
import 'brace/theme/terminal'




class CodeEditor extends Component {

  state = {
    languages: ['javascript', 'java', 'python', 'xml', 'ruby', 'sass', 'markdown', 'mysql', 'json', 'html', 'handlebars', 'golang', 'csharp', 'coffee', 'css'].sort(),
    themes: ['monokai', 'github', 'tomorrow', 'kuroir', 'twilight', 'xcode', 'textmate', 'solarized_dark', 'solarized_light', 'terminal'].sort(),
    fontSize: ['8', '10', '12', '14', '16'],
    currentLanguage: 'javascript',
    currentTheme: 'solarized_dark',
    currentFontSize: '14',
    value: "console.log('Hello World')"
  }

  onChange = (event) => {
    const newState = { ...this.state }
    newState.value = event
    this.setState({ value: newState.value })
    
  }

  render() {

    let themeKey = 1
    let langKey = 100

    return (
      <div className="CodeEditor">
        <div className="row">

          <nav className="navbar navbar-expand-lg navbar-light">

            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle mr-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.currentTheme.split('_').join(' ')}
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.state.themes.map(theme => <a key={themeKey++} onClick={() => this.setState({ currentTheme: theme })} className="dropdown-item">{theme.split('_').join(' ')}</a>)}
              </div>
            </div>

            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle mr-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.currentLanguage}
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.state.languages.map(language => <a key={langKey++} onClick={() => this.setState({ currentLanguage: language })} className="dropdown-item">{language}</a>)}
              </div>
            </div>

            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle mr-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.currentFontSize}
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {this.state.fontSize.map(size => <a key={langKey++} onClick={() => this.setState({ currentFontSize: size })} className="dropdown-item">{size}</a>)}
              </div>
            </div>


          </nav>

        </div >

        <div className="row">
          <AceEditor
            mode={this.state.currentLanguage}
            theme={this.state.currentTheme}
            name="blah2"
            height='100vh'
            width='49vw'
            wrapEnabled={true}
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={parseInt(this.state.currentFontSize)}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            defaultValue='// start coding here...'
            value={this.state.value}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }} />

        </div>


      </div >

    )

  }

}

export default CodeEditor