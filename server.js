var express= require('express');
var path = require('path');
var fs=require('fs');
var app=express();
var bodyParser=require("body-parser");
var Operaciones=require("./Controlador/Operaciones");
var session=require("express-session");
var cookieParser=require("cookie-parser")
app.set('view engine','html');

app.engine('html',function(path,option,callback){
	fs.readFile(path,'utf-8',callback)
});

app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.use(session({secret:"javier",resave:true,saveUninitialized:true}));
app.use(bodyParser.urlencoded({extended:true}));

//midleware para las peticiones http - Json
app.use(bodyParser.json());

app.use(function(err,req,res,next){
	res.status(err.status||500);
})
app.get('/',Operaciones.inicio);
app.get('/menu',Operaciones.menu);
app.post("/logear",Operaciones.logear);
app.post("/cargarplatos",Operaciones.cargarplatos);


app.listen(3100,function(){
	console.log("servidor ejecutando en el puerto "+ 3100)
})