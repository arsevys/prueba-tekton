import React, { Component } from 'react';
import MCP from './menu-cajero-platos'; //menu cajero platos

class MenuCajero extends Component{
constructor(){
   super();
   this.state={
   	p:[]
   }

}

orden(){
 
 console.log(this.state);
}
cambiar(e){
this.setState({
	p:e
})
}
render(){
	return(
		<div className="contenedor" >

     <div className="gui">

            <div className="usuVen">
          	  	<div>
          	  		<p>Nro. Usuario</p>
          	  		<input type="text" name="" className="form-control" />
          	  	</div>
          	  	<div>
          	  		<p>Nombre</p>
          	  		<input type="text" name="" className="form-control" />
          	  	</div>
          	  	<div>
          	  		<p>Tipo de venta</p>
          	  		<select className="form-control">
          	  			<option>Efectivo</option>
          	  			<option>Tarjeta</option>
          	  		</select>
          	  	</div>
          	</div>	
          	<div className="tabla">
          		<table className="table table-hover table-bordered">
					<tr>
					 <th>Nombre</th>
					 <th>Cantidad</th>
					</tr>
					<tr>
					 <td>Pollo</td>
					 <td>300gr</td>
					</tr>
					<tr>
					 <td>Pollo</td>
					 <td>300gr</td>
					</tr>
					
                </table>
          	</div>
            <div className="footer">
            	<div className="pedido">
            		<p>Total de venta </p>
            	     <strong>10.222</strong>
            	     <br/>
            	     <input type="text" p="dafasf" defaultValue="Vender" onClick={this.orden.bind(this)} className="btn btn-info" />
            	</div>
            </div>


          </div>

          < MCP pl={this.cambiar.bind(this)} />
          </div>

		);
}
}

export default MenuCajero;