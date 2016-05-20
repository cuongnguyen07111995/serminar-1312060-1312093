var express =require('express');
var bodyParser= require('body-parser');
var routes=require('./routes');
//var views=require('./views');
var app= express();
var ect =require('ect');
//var ect1=require('html');
var renderer=ect({
	root:__dirname +'views',
	//ext:'.html'
	ext: '.ect'
});
app.use(express.static('public'));
app.use('/',routes);
app.set('view engine','ect');
app.engine('ect',renderer.render);
//app.use(bodyParser.urlencoded({extended:true}));
//	res.render('calculator');
//});
//var HelloControler=require('./app/controller/HelloControllers');
var calculator=require('./app/models/calculator');
var CalculatorController=require('./app/models/CalculatorControllers');
//app.get('/hello',HelloControler.index);
app.get('/index',CalculatorController.index);
app.post('/index',CalculatorController.calculate);
//app.post('/services',function(req,res){
//	res.render('services');
//});
var port=3000;
app.listen(port,function(){
	console.log('port '+port);
});