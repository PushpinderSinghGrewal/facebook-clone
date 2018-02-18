import React from 'react';
import {FacebookBar} from './facebookbar.js';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Image from 'material-ui-image';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Feed} from './feed.js';

export class ProfilePage extends React.Component
{
render(){
return(
<div>
  <FacebookBar />





  <Card style={{height: '5vw',width:800,marginLeft: 198}} size={670}>

    <CardMedia
      overlay={<CardTitle title="" subtitle="User's name will appear here" />}
      avatar="images/jsa-128.jpg"
    >
      <img height='400px' src="http://givemesport.azureedge.net/images/17/12/29/a4c6f7af051d676d08174d89f4daffa5/960.jpg" alt="" />
    </CardMedia>
    <CardHeader
      title=""
      subtitle=""

    />

  </Card>
  <div style={{marginTop:320,marginLeft:140}}>
    <Feed />
  </div>
  <Paper style={{width:280,height:370,marginTop:-1460,marginLeft: 200}} zDepth={3} rounded={false} >About me</Paper>
  </div>
  );



}

}
