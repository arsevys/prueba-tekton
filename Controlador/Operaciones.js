var path=require("path");
var op=require("./../Modelo/Operaciones");
class Operaciones {

static inicio(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
}

static logear(req,res){

	console.log(req.body);
    let respuesta={
    	mensaje:"",
    	error:true
    }
  /*validar correo*/
  let correo=/^\w+\@tekton\w{0,12}\.\w{2,13}$/;
  if(!correo.test(req.body.correo)){
  	respuesta.mensaje="Su correo debe contener la palabra tekton"
  	res.send(respuesta);
  	return;
  }
   

   op.logeo(req.body.correo,req.body.password,(err,data)=>{
     
     if(data.length==0){
     	respuesta.mensaje="Este usuario no existe";
     	res.status(200).send(respuesta);
     	return;};
    
     req.session.usuario={
     	"ide":data[0].idempleado,
     	"nombre":data[0].nombre,
     	"apellido":data[0].apellido,
     	"tipo":data[0].tipo
     }
     respuesta.error=false;
     res.status(200).send(respuesta);
     console.log(req.session);
     console.log(data);
   });

}

static menu(req,res){
  var y=["menu-admin.html","menu-chef.html","menu.html"]
	console.log(req.session,88);
  if(!req.session.usuario){
    res.redirect("/")
    return;
  }
	res.sendFile(path.join(__dirname,'../public/'+y[req.session.usuario.tipo-1]))
}
static menuchefs(req,res){
	console.log(req.session);
	res.sendFile(path.join(__dirname,'../public/menu-chef.html'))
}
static menuadmin(req,res){
	console.log(req.session);
	res.sendFile(path.join(__dirname,'../public/menu-admin.html'))
}

static cargarplatos(req,res){
	op.mostrarPlatos((err,d)=>{
		if(err){return};
        console.log(d);
		res.send(d);
	})
}

static realisarpedido(req,res){
	console.log(req.body);
	let i = req.body;
  if(i.codorden=='' || i.cliente=='' ){
    return res.send(false);
  }
	op.registrarOrden(i.codorden,i.cliente,i.tipo,i.total,(e,id)=>{
		if(e){console.log(e);return res.send(false);}
      op.guardarplatos(id,i.platos);
  res.status(200).send(true);
	})
}

static listarorden(req,res){
 op.listarorden((e,data)=>{
 	
    res.send(data);
 })	

}
static listarordencompleto(req,res){
 op.listarordencompleto((e,data)=>{
 	
    res.send(data);
 })	

}
static flujocaja(req,res){
 op.flujodecaja((e,data)=>{
 	console.log(data);
    res.send(data);
 })	

}

static listarplatoxorden(req,res){
	var i= req.body.ide;
	console.log(req.body);
 op.listarplatoxorden(i,(e,data)=>{
 	console.log(data);
    res.send(data);
 })	

}

static actualisarestadoorden(req,res){
	console.log(req.body);
	var i= req.body;
	
    op.actualisarestadoorden(i.e,i.ide,(e,data)=>{
 	console.log(data);
    res.send(data);
 })	
}
static reportedeldia(req,res){
	console.log(req.body);
	var i= req.body;
	
    op.reportedeldia((e,data)=>{
 	console.log(data);
    res.send(data);
 })	
}
}

module.exports=Operaciones;