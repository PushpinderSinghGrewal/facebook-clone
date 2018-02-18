
import React  from 'react';

import Avatar from 'material-ui/Avatar';

 export class FacebookBar extends React.Component{
render(){
return(


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



      <a href="" > <h1 style={{color:'white',paddingLeft:'60px',marginTop:'-25px',fontSize:'20px',fontFamily:'Tahoma'}}> xXalphaManXx</h1></a>
      <a href="" > <h1 style={{color:'white',paddingLeft:'210px',marginTop:'-32px',fontSize:'20px',fontFamily:'Tahoma'}}> Home</h1></a>
    </div>
  </div>

</div>
);
}
}
