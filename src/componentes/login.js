import React, { Component } from 'react';
import './../complementos/style.css';
import axios from 'axios';
class LoginC extends Component {
constructor(){
	super();
	this.state={
		correo:"",
		password:"",
		respuesta:""
	}

}

logear(e){
	var self=this;
 console.log(this.refs);

 console.log(this.refs);

 console.log(e.currentTarget.dataset);
 axios.post("/logear",{
 	correo:this.state.correo,
    password:this.state.password
 }).
 then(response=>{
 	if(response.data.error){
     self.setState({respuesta:response.data.mensaje})
 	}else {
 		location.href="/menu";
 	}
 }).
 catch(error=>{
 	console.log(error);
 })
}
updatepass(e){
	this.setState({
		password:e.target.value
	})
}

updateco(e){
	this.setState({
		correo:e.target.value
	})
}

 render(){
   return(
     
		<div className="login bg-primary">
		<h3>Iniciar Session</h3>
		<form>
			<label htmlFor="correo">Correo :</label><br/>
			<input type="text" ref="op" id="correo" onChange={this.updateco.bind(this)} className="form-control" placeholder=" Correo" /><br/>
			<label htmlFor="pwd" >Contraseña :</label><br/>
			<input type="password" ref="op" id="pwd" onChange={this.updatepass.bind(this)} className="form-control" placeholder=" Contraseña" />
			<br/>
			<br/>
			<center>
				<input type="button" data-y="dasas" onClick={this.logear.bind(this)} className="btn btn-info"  value="Enviar" />
			     <br/><span className="op">{this.state.respuesta}</span>
			</center>
		</form>
	</div>
	

   	)

 }

}


export default LoginC;