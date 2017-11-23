var express= require('express');
var path = require('path');
var fs=require('fs');
var app=express();

app.set('view engine','html');
app.engine('html',function(path,option,callback){
	fs.readFile(path,'utf-8',callback)
});
app.use(express.static(path.join(__dirname,"public")));
console.log(__dirname)
//Midleware
//app.use('/',indexRoutes);

app.use(function(err,req,res,next){
	res.status(err.status||500);
})
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(3100,function(){
	console.log("servidor ejecutando en el puerto "+ 3100)
})