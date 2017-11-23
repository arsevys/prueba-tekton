var pg=require("pg");
const config={
	user:"postgres",
	password:"andy",
	port:5432,
	host:"localhost",
	database:"tekton"
}
var pool=new pg.Pool(config);
class Operaciones {

static logeo(x,i,callback){
 pool.connect((err,client,done)=>{
     
     let query=`
     select e.id_emp idempleado ,e.nom_emp nombre,e.ape_emp apellido,e.id_te tipo from
      empleados e
      where e.correo_emp=$1 and e.psw_emp=$2

     `;

 	client.query(query,[x,i],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
 	})
 })


}

}


module.exports=Operaciones;