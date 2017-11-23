import React, { Component } from 'react';
import './../complementos/style.css';
class LoginC extends Component {

 render(){
   return(
     
		<div className="login bg-primary">
		<h3>Iniciar Session</h3>
		<form>
			<label htmlFor="correo">Correo :</label><br/>
			<input type="text" id="correo" className="form-control" placeholder=" Correo" /><br/>
			<label htmlFor="pwd">Contraseña :</label><br/>
			<input type="password" id="pwd" className="form-control" placeholder=" Contraseña" />
			<br/>
			<br/>
			<center>
				<input type="button" className="btn btn-info"  value="Enviar" />
			</center>
		</form>
	</div>
	

   	)

 }

}


export default LoginC;