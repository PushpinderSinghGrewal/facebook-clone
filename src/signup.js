import React from 'react';
import {Bar} from './bar.js'
import RaisedButton from 'material-ui/RaisedButton';

   class SignUp extends React.Component
{
  render()
{


  return(
    <div><Bar />
      <div style={{marginTop:'-20px',background:'#d7ddea',height:'650px'}}>
        <h1 style={{paddingLeft:'970px',paddingTop:'25px'}}>  Create a new account </ h1>
          <h4 style={{color:'grey',paddingLeft:'970px'}}> It's free now but we might charge in the future!</h4>
          <div >  <input placeholder="First name" type="text " style={{borderRadius:'7px',width:'130px',height:'30px',marginLeft: '1000px'}} / >
            <input placeholder=" Surname" type="text " style={{borderRadius:'7px',width:'130px',height:'30px',marginLeft:  '30px'}} / >
            </div>
            <input placeholder=" mobile number or e mail address" type="text "
              style={{borderRadius:'7px',width:'300px',height:'30px', marginLeft:'1000px',marginTop:'20px'}} / >
              <input placeholder=" new password" type="text "
                style={{borderRadius:'7px',width:'300px',height:'30px', marginLeft:'1000px',marginTop:'20px'}} / >
                <br />
                <RaisedButton label="Create account" primary={true} style={{marginTop:'10px',borderRadius:'7px',width:'200px',height:'30px', marginLeft:'1000px'}}/>
              </div></div>
              );



              }
              }
              export default SignUp;
