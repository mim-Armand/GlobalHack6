import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';






class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <span>
          <TopBar/>
            {this.props.children}
          <footer>
            <div class="mui-container mui--text-center">
              Made with ♥ by <b>st patrick center.</b>
            </div>
          </footer>
        </span>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
