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
     	"id":data[0].idempleado,
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
	console.log(req.session);
	res.send(req.session.usuario)
}
}

module.exports=Operaciones;