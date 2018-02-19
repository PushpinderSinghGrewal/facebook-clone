import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import SignUp from './signup';
import {Homepage} from './Homepage.js';
import {Bar} from './bar.js';
import {ProfilePage} from './profilepage.js'
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>

          <Homepage/>
          
        </MuiThemeProvider>
      </div>
  );
  }
}

export default App;
