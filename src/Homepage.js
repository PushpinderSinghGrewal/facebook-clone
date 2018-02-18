import React  from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Image from 'material-ui-image';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Feed} from './feed.js';
 export class Homepage extends React.Component{
render(){
return(
  <div>
    <div id="bar" style={{height:'50px',backgroundColor:'#3B5998'}} >
      <div class="form-group has-feedback"
        style={{color:'#00aced', marginLeft:'220px',width:'350px'}}>
        <div  style={{paddingTop:'10px'}}>
          <input  type="text" placeholder="Search" class="form-control"
            style={{marginTop:'0px',height:'30px',width:'120%',backgroundColor:'#F8F8F8'}} />
          <i style={{marginRight:'-65px',marginTop:'20px'}} class=" fa fa-search form-control-feedback"></i>
        </div>


        <div style={{marginLeft:'640px',marginTop:'-33px'}}>



          <Avatar size={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZtmUTqaQRgP8XeUIgXybw7AMqQ54VZQHN-uFSwWokNNHjq3p" />



          <a href="" > <h1 style={{color:'white',paddingLeft:'60px',marginTop:'-25px',fontSize:'20px',fontFamily:'Tahoma'}}> xXalpaManXx</h1></a>
          <a href="" > <h1 style={{color:'white',paddingLeft:'210px',marginTop:'-32px',fontSize:'20px',fontFamily:'Tahoma'}}> Home</h1></a>
        </div>
      </div>

    </div>
    <div style={{background:'#d7ddea',height:'1950px'}}>
      <Feed />
    </div>
    </div>

    );



    }





    }
