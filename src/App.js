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
          <div style={{}}>
            <ProfilePage/>
          </div>
        </MuiThemeProvider>
      </div>
  );
  }
}

export default App;
  //<h2 style={{color:'white',paddingLeft:'40%'}}> facebook</h2>
//  <Homepage />
  //
//<ProfilePage/>
/*<div>

<Bar/>
<SignUp />




  <MuiThemeProvider >

    <SignUp/>
    </MuiThemeProvider >
  </div>
Code for facebook's navbar of signup page

<MuiThemeProvider>
    <div id="bar" style={{marginTop:'-20px',height:'90px',backgroundColor:'#3B5998'}} >
      <div style={{color:'white'}}><h1 style={{paddingLeft:'240px',paddingTop:'20px'}}> facebook</h1>
        <h4 style={{ paddingLeft:'990px',marginTop:'-50px'}}> Email or phone </h4>

        <h4 style={{  paddingLeft:  '1210px',marginTop:'-40px'}}> Password </h4>
      </div>

      <div  style={{marginLeft:  '990px',marginTop:'-10px'}}>
        <input type="text " style={{width:'110px',marginRight:  '100px'}} / >
          <input type="text " style={{width:'110px',marginRight:'20px'}} / >

            <FlatButton  label="log in" style={{color:'white',marginBottom:'10px',marginRight:'10px'}}/>
          </div>
          <div style={{marginLeft:'400px'}}>

          </div>
        </div>

      </MuiThemeProvider>*/
