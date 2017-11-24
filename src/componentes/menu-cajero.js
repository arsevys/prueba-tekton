import React, { Component } from 'react';
import MCP from './menu-cajero-platos'; //menu cajero platos
import axios from 'axios';
import './../complementos/menucajero.css';
class MenuCajero extends Component{
constructor(){
   super();
   this.state={
   	
   	pedidos:[],
   	total:0
   }

}

orden(){
      
	
	axios.post("/realisarpedido",{
      'codorden':this.refs.orden.value,
      'cliente':this.refs.nombre.value,
      'platos':this.state.pedidos,
      'total':this.state.total,
      'tipo':this.refs.tipo.value
	}).
	then(r=>{
		if(r.data){
			alert("Su pedido se registro correctamente");
			location.reload(true);
		}else {
			alert("Ocurrio un error");
		}
     console.log(r);

	}).catch(err=>{
		console.log(err);
	})
 
}
agrega(e){
	var i=this.state.pedidos;
	var p=parseInt(this.state.total);
	var np=parseInt(e.precio);
	
	i.push(e);
    this.setState({
	pedidos:i,
	total:(p+np).toFixed(2)
    })
}
desagrega(e){
	
	let p=this.state.pedidos;
	let pre=parseInt(e.precio);
	let total=this.state.total - pre;
	let eliminandopedidos=p.filter(function(r){
		
		
      if(r.id==e.id){
      	return false;
      }
      else{
      	return true;
      }
	})
	this.setState({
		pedidos:eliminandopedidos,
		total:total.toFixed(2)
	})
}
render(){
	return(
		<div className="contenedor" >

     <div className="gui">

            <div className="usuVen">
          	  	<div>
          	  		<p>Nro. Orden</p>
          	  		<input type="text" ref="orden" name="" className="form-control" />
          	  	</div>
          	  	<div>
          	  		<p>Nombre</p>
          	  		<input type="text"ref="nombre" name="" className="form-control" />
          	  	</div>
          	  	<div>
          	  		<p>Tipo de venta</p>
          	  		<select ref="tipo" className="form-control">
          	  			<option value='e'>Efectivo</option>
          	  			<option value='t'>Tarjeta</option>
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