import React, { Component } from 'react';
import axios from 'axios';
class MenuCajeroPlato extends Component{
  constructor(){
  	super();
  	this.state={
  		platos:[]
  	}

  	var self=this;
    axios.post("/cargarplatos").
    then(r=>{
    	console.log(r);
    	self.setState({platos:r.data});
    	self.props.pl(r.data);
    }).catch(e=>{
    	console.log(e);
    })

  }


	render(){
     return (
     	
         <div className="menu" platos={this.state.platos}>
          	  <div className="titulo">

	          	  	<h3>El menu del dia</h3>
	          	  	<p>De la cocina <br /> a tu mesa</p>   	  	
          	  </div>
          	  <div className="platillos">
	          	  	{this.state.platos.map(function(e,i){
	          	  		console.log(e,i);
	          	  		return(
                     	<div key ={i} className="img">
	          	  		<img  src={"Complementos/img/"+e.foto_pla} alt="" />
	          	  		<input type="radio" />
	          	  		<span>{e.descr}</span>
	          	  	</div>);
	          	  	})}
	          	  
	          	  	
          	  </div>
          </div>




     	);
	}
}

export default MenuCajeroPlato;