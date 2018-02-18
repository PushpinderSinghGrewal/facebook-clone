import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Image from 'material-ui-image';
export class Feed extends React.Component{
render(){
return(
  <div style={{marginLeft:358,}}>
    <List>
      <div >
        <Paper style={{backgroundColor:'#d7ddea',width:500,height:130}}>


          <form >
            <div class="input-group"  style={{marginTop:'10px',}}>

              <input  type="text" class="form-control" placeholder="What's in your head?  Spit it out"
                style={{marginTop:'30px',height:'75px',width:'500px',backgroundColor:'#F8F8F8'}}/ >
                <div class="input-group-btn">

                </div>
              </div>
            </form>
          </Paper>
        </div>
        <div style={{marginLeft:150}} >
          <Paper style={{width:500,height:100,marginLeft:-148,marginTop:20,textAlign:'left'}} zDepth={3} rounded={false} >
            <b style={{marginLeft:5,marginBottom:10}}>Geekyness Overloaded&nbsp;
              <i style={{color:'#00aced'}}class="fa fa-check"></i>
            </b><br/>
            <h5 style={{marginLeft:5}}>
              Text will appear here.<br/><br/>

            </h5></Paper>
          <Paper style={{height: 450,
            width: 500,
            marginLeft: -148,
            marginBottom:0,


          }}
            zDepth={3} rounded={false} ><Image loadingStyle={{color:'red'}} color='#00aced'  src=""/></Paper>


          <Paper style={{width:500,height:100,marginLeft:-148,}} zDepth={3} rounded={false} />



          <Paper style={{width:500,height:70,marginTop:-45,marginLeft: -148}} zDepth={3} rounded={false} >


            <FlatButton  style={{color:'black',textAlign:'center'}}
              href=""
              target="_blank"

              label="Like"
              secondary={true}
              icon={<i class="material-icons">thumb_up</i>}
            />


            <FlatButton style={{color:'black'}}
              href=""
              target="_blank"
              label="Comment"
              secondary={true}
              icon={<i class="material-icons">mode_comment</i>}
            />




          </Paper>



          <Paper style={{width:500,height:100,marginLeft:-148,marginTop:-20,textAlign:'left'}} zDepth={3} rounded={false} >
            <b style={{marginLeft:5,marginBottom:10}}>xXalpaManXx&nbsp;
              <i style={{color:'#00aced'}}class="fa fa-check"></i>
            </b><br/>
            <h5 style={{marginLeft:5}}>And here also :P
            </h5></Paper>
          <Paper style={{height: 450,
            width: 500,
            marginLeft: -148,
            backgroundImage:"url('')",
            marginBottom:151,
            textAlign: 'center',

          }}
            zDepth={3} rounded={false} LeftAvatar={<Avatar src="images/ok-128.jpg" />} >
            <Image color='#00aced' src=""/>
          </Paper>
          <Paper style={{width:500,height:40,marginTop:-95,marginLeft: -148}} zDepth={3} rounded={false} >
            <FlatButton style={{color:'black'}}
              href=""
              target="_blank"

              label="Like"
              secondary={true}
              icon={<i class="material-icons">thumb_up</i>}
            />


            <FlatButton style={{color:'black'}}
              href=""
              target="_blank"
              label="Comment"
              secondary={true}
              icon={<i class="material-icons">mode_comment</i>}
            /></Paper>


        </div></List></div>
  );
  }
  }
