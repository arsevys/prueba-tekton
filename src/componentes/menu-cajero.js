import React, { Component } from 'react';
import MCP from './menu-cajero-platos'; //menu cajero platos

class MenuCajero extends Component{
constructor(){
   super();
   this.state={
   	p:[],
   	pedidos:[],
   	total:0
   }

}

orden(){
 
 console.log(this.state);
}
agrega(e){
	console.log("Agregando");
	var i=this.state.pedidos;
	var p=this.state.total;
	var np=parseInt(e.precio);
	i.push(e);
    this.setState({
	pedidos:i,
	total:p+np
    })
    console.log(this.state.pedidos);
}
desagrega(e){
	
	let p=this.state.pedidos;
	var eliminandopedidos=p.filter(function(r){
		
		console.log(r,e);
      if(r.id==e.id){
       console.log("este no es");
      	return false;
      }
      else{
      	return true;
      }
	})
	this.setState({
		pedidos:eliminandopedidos
	})
console.log("Va a desagregar");
console.log(eliminandopedidos,899);
}
render(){
	return(
		<div className="contenedor" >

     <div className="gui">

            <div className="usuVen">
          	  	<div>
          	  		<p>Nro. Orden</p>
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
					<thead>
					<tr>	
					 <td>Descripcion</td>
					 <td>Precio</td>
					</tr>

					</thead>
					<tbody>
					{this.state.pedidos.map(function(e,i){
                           console.log(e,i);
						return(
                                  <tr key={i}>
					              <td>{e.nombre}</td>
					              <td>{e.precio}</td>
					              </tr>
							);
					}) }
					
					
					</tbody>
                </table>
          	</div>
            <div className="footer">
            	<div className="pedido">
            		<p>Total de venta </p>
            	     <strong>{this.state.total}</strong>
            	     <br/>
            	     <input type="text" p="dafasf" defaultValue="Vender" onClick={this.orden.bind(this)} className="btn btn-info" />
            	</div>
            </div>


          </div>

          < MCP pa={this.agrega.bind(this)} pd={this.desagrega.bind(this)}/>
          </div>

		);
}
}

export default MenuCajero;