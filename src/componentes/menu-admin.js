import React,{ Component } from 'react';
import axios from 'axios';


class MenuAdmin extends Component{
constructor(){
	super();
   this.state={
   	ordenesdeldia:[],
    totalordendia:0,
   	listaorden:[],
   	total:0
   }
   var self=this;
   this.reportedeldia(this);
   this.listarordencompleto(this);
}
reportedeldia(e){
  console.log(898);
var self=this;
  axios.post("/reportedeldia").
  then(data=>{
    console.log(data);
    self.setState({
      ordenesdeldia:data.data,
      totalordendia:data.data[0].total
    })
  }).catch(err=>{console.log(err);})


}
listarordencompleto(e){
  var self=this;
  axios.post("/listarordencompleto").
  then(data=>{
    console.log(data);
    self.setState({
      listaorden:data.data
    })
  }).catch(err=>{console.log(err);})

}


render(){
	var self=this;

          
           
           return(
            <div>
            <div className="col-md-6">
             <center><h3>Flujo de caja </h3></center>
             <table className="table ">
            <thead>
              <tr>
              <th>Descripcion</th>
              <th>Noviembre</th>
            </tr>
            </thead>
              <tbody>
        <tr><td><strong>Ingreso de efectivo</strong></td></tr>
            <tr><td>Ganancias</td>
                     <td>S/890.00</td>
            </tr> 
            <tr className="azul"><td>
              Total Ingresos
            </td><td>S./80.00</td>
            </tr>

        <tr><td><strong>Egreso de efectivo</strong></td></tr>
       
       <tr><td>Ganancias</td><td>S/890.00</td></tr> 
            <tr className="azul"><td>Total Ingresos</td><td>S./80.00</td></tr>

        <tr><td><strong>Egreso de efectivo</strong></td></tr>
        
          <tr><td>Pago de personal</td><td>S/.589.00</td></tr>
          <tr><td>Pago de proveedores</td><td>S/.800.00</td></tr>
          <tr className="azul"><td><strong>Total Egresos</strong></td><td>S/.500.00</td></tr>
          <tr><td><strong>Flujo neto Economico</strong></td><td>S/.500.00</td></tr>
        <tr><td>Servicio de Agua y Luz</td><td>S./800.00</td></tr>
        <tr className="azul"><td><strong>Flujo Neto</strong></td><td>S/.5000.00</td></tr>

      </tbody>
      
      
    </table>

  </div>
  

      <div className="col-md-6">
    <center><h3>Reporte de Ordenes Del Dia</h3></center>
    <table className="table bg-success">
      <thead>
        <tr>
        <th>Nro </th>
        <th>total</th>
      </tr>
      </thead>
      <tbody>
      {this.state.ordenesdeldia.map(function(e,i){
       console.log(e);
        return(
          <tr key={i}><td>{i}</td><td>{e.monto}</td></tr>
          );
      })}
    
        
      </tbody>
      <tfoot>
        <tr>
          <td><strong>Monto Total :</strong></td>
          <td><strong>{this.state.totalordendia}</strong></td>
        </tr>
      </tfoot>
      
    </table>

  </div>


  <div className="col-md-6">
    <center><h3>Ordenes</h3></center>
    <table className="table bg-info">
    <thead>
      <tr>
        <th>Nro de Orden</th>
        <th>Cliente</th>
        <th>Tipo de pago</th>
        <th>Fecha</th>
        <th>Estado</th>
        <th>Monto Total</th>
      </tr></thead>
      <tbody>
      {this.state.listaorden.map(function(e,i){
        console.log(e);
        return(
           <tr><td>{e.nro_orden}</td><td>{e.nomcliente}</td>
           <td>{(e.tipopago=='t')?'Tarjeta':'Efectivo'}</td><td>{e.fecha}</td>
           <td>{e.estados}</td><td>S/{e.total}</td></tr>
          );
      })}
      
      </tbody>
    </table>

  </div>


           </div>
		);
}

}

export default MenuAdmin;