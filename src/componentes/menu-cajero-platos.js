import React, { Component } from 'react';
import axios from 'axios';
class MenuCajeroPlato extends Component{
  constructor(){
  	super();
  	this.state={
  		platos:[],
  		like:false
  	}
   this.agregar = this.agregar.bind(this);
  	var self=this;
    axios.post("/cargarplatos").
    then(r=>{
    	console.log(r);
    	self.setState({platos:r.data});
    	
    }).catch(e=>{
    	console.log(e);
       })

  }

    agregar(e){

       // this.setState({like: !this.state.like})
       console.log(this);
       var t=this.state.platos;
       let j=e.target.dataset;
       var o={
       		"id":j.idp,
             "nombre":j.des,
             "precio":j.precio
       	}
       if(e.target.checked==true){
       	
        this.props.pa(o);
       }else{
     this.props.pd(o);
       }
        console.log(this.state.platos);
        console.log(e.target.checked);

    }




	render(){
		var self=this;
     return (
     	
         <div className="menu" platos={this.state.platos}>
          	  <div className="titulo" >

	          	  	<h3>El menu del dia</h3>
	          	  	<p>De la cocina <br /> a tu mesa</p>   	  	
          	  </div>
          	  <div className="platillos">
	          	  	{this.state.platos.map(function(e,i){
	          	  		
	          	  		return(
                     	<div key ={i} className="img">
	          	  		<img  src={"Complementos/img/"+e.foto_pla} alt="" />
	          	  		<input type="checkbox" defaultChecked={self.state.like} onChange={self.agregar}  data-idp={e.id_pla} data-des={e.descri} data-precio={e.precio} />
	          	  		<span>{e.descr}</span>
	          	  	</div>);
	          	  	})}
	          	  
	          	  	
          	  </div>
          </div>




     	);
	}
}

export default MenuCajeroPlato;