import React,{ Component } from 'react';
import axios from 'axios';


class MenuChefs extends Component{
constructor(){
	super();
   this.state={
   	ordenes:[],
   	platoxorden:[],
   	total:0
   }
   var self=this;
   this.verlistaxorden=this.verlistaxorden.bind(this);

   this.cambiarestado=this.cambiarestado.bind(this);
   axios.post("/listarorden").
   then(r=>{
   	self.setState({
   		ordenes:r.data
   	})
   }).catch(err=>{console.log(err)})

}
listarplatoxorden(e){
	console.log(e)
	var self=this;
	axios.post("/listarplatoxorden",{"ide":e}).
   then(r=>{
   	self.setState({
   		platoxorden:r.data,
   		total:r.data[0].total
   	})
   }).catch(err=>{console.log(err)})

}

verlistaxorden(e){
	var i=e.target.dataset.id;
	this.listarplatoxorden(i);
}

cambiarestado(e){
	var self=this;
	let i=e.target.value;
	let id=e.target.dataset.id;
	console.log(i,id);
	axios.post("/actualisarestadoorden",{"e":i,"ide":id}).
   then(r=>{
   	if(i=='t'){
   		axios.post("/listarorden").
   then(r=>{
   	self.setState({
   		ordenes:r.data
   	})
   }).catch(err=>{console.log(err)})
   
   	}
   	
   }).catch(err=>{console.log(err)})
}
render(){
	var self=this;
	return(
          <div>
          <div className="row">
			<div className="col-xs-1 col-xs-offset-1 col-sm-6 col-lg-offset-1 col-md-6 col-lg-6">
		<p>Bienvenido estos son los pedidos</p>
		
         {this.state.ordenes.map(function(i,o){
           
           return(
           <div className="ped col-lg-12" key={o}>
			<span>{i.nomcliente}</span>
			<span>{i.fecha}</span>
			<span>{(i.tipopago=='t')?'Tarjeta':'Efectivo'}</span>
              <select  defaultValue={i.estado} data-id={i.id} onChange={self.cambiarestado} className="form-control est" >
              	<option  value="c">Comanda</option>
              	<option  value="p">En Proceso</option>
              	<option  value="t">Terminado</option>
              </select>
            	     <input type="button" data-id={i.id} value="Ver Platos" onClick={self.verlistaxorden} className="btn btn-primary" />
		</div>


           	);

         })}
         

		</div>
		<div className="col-xs-1 col-xs-offset-1 col-sm-6 col-lg-offset-1 col-md-6 col-lg-4">
			<div className="table-responsive ">          
  <table className="table">
    <thead>
      <tr>
      	<th>Nro </th>
        <th>Nombre</th>
        <th>Precio</th>
        
      </tr>
    </thead>
    <tbody>
   {this.state.platoxorden.map(function(i,a){
   	return(
        <tr key={a}>
        <td>{a+1}</td>
        <td>{i.descri}</td>
        <td>{i.precio}</td>
        
      </tr>
   		);
   })}
      
    </tbody>
  </table>
  </div>
  <span >Total :   {this.state.total}</span>
		</div>
		</div>


          </div>

		);
}

}

export default MenuChefs;