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

      </ MuiThemeProvider>
      );
      }

      }
