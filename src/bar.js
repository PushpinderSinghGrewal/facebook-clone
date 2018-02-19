import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
export class Bar extends React.Component{
render()
{
return(

<MuiThemeProvider>
  <div id="bar" style={{marginTop:'-20px',height:'90px',backgroundColor:'#3B5998'}} >
    <div style={{color:'white'}}><h1 style={{paddingLeft:'240px',paddingTop:'20px'}}> facebook</h1>
      <h4 style={{ paddingLeft:'990px',marginTop:'-40px'}}> Email or phone </h4>
      <h4 style={{  paddingLeft:'1180px',marginTop:'-30px'}}> Password </h4>
      <input type="text " style={{width:'110px',marginLeft:  '1000px'}} / >

        <input type="text " style={{width:'110px',marginLeft:'70px'}} / >

          <FlatButton  label="log in" style={{color:'white',marginBottom:'90px',marginRight:'10px'}}/>

        </div>



      </div>

      </ MuiThemeProvider>
      );
      }

      }
