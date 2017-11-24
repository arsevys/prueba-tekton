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

static mostrarPlatos(callback){
  pool.connect((err,client,done)=>{
     
     let query=`
     select * from platos 

     `;

  client.query(query,[],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
  })
 })
}

static registrarOrden(a,b,c,d,callback){
  pool.connect((err,client,done)=>{
     
     let query=`
   insert into orden(nro_orden,nomcliente,tipopago,total)values($1,$2,$3,$4)
   RETURNING id

     `;

  client.query(query,[a,b,c,parseFloat(d)],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows[0].id);
  })
 })
}

static guardarplatos(id,platos,callback){
  pool.connect((err,client,done)=>{
     
     let query=`
   insert into ordenxplatos values($1,$2)

     `;
   for(let i=0;platos.length>i;i++){
    client.query(query,[id,platos[i].id],(err,data)=>{
     if(err){console.log(err);return;}

  })
    if(platos.length-1==i){
      done();
    }
   }
  
 })
}


static listarorden(callback){
  pool.connect((err,client,done)=>{
     
     let query=`
     select * from orden
     where estado='c' or estado='p'

     `;

  client.query(query,[],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
  })
 })
}

static flujodecaja(callback){
  pool.connect((err,client,done)=>{
     
     let query=`
     select (select sum(total) from orden ) total,g.servicios,g.proveedores,g.personal from
     gastos g

     `;

  client.query(query,[],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
  })
 })
}


static listarordencompleto(callback){
  pool.connect((err,client,done)=>{
     
     let query=`
     select *,case
when estado='p' then 'Pendiente'
when estado='t' then 'Terminado'
else 'Comanda'
end estados from orden

     `;

  client.query(query,[],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
  })
 })
}



static listarplatoxorden(i,callback){
  pool.connect((err,client,done)=>{
     
     let query=`
     select p.*,o.total
      from ordenxplatos op
      inner join orden o
      on op.id=o.id
      inner join platos p
      on op.id_pla=p.id_pla
      where op.id=$1 

     `;

  client.query(query,[i],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
  })
 })
}

static actualisarestadoorden(i,b,callback){
  pool.connect((err,client,done)=>{
     
     let query=`
     update orden
     set estado=$1
     where id=$2

     `;

  client.query(query,[i,b],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
  })
 })
}

static reportedeldia(callback){
  pool.connect((err,client,done)=>{
     
     let query=`
     select o.total monto,(select sum(p.total) from orden p) total,to_char(o.fecha::timestamp,'YYYY-MM-DD')
from orden o
where to_char(o.fecha::timestamp,'YYYY-MM-DD')=to_char(now() AT TIME ZONE 'UTC' - interval '5 hours','YYYY-MM-DD') 


     `;

  client.query(query,[],(err,data)=>{
     done();
     if(err){console.log(err);return callback(err,null)}

     return callback(null,data.rows);
  })
 })
}

}


module.exports=Operaciones;