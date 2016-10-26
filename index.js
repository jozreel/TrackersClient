var express = require('express');
var path = require('path');
var app = express();
app.use('/public',express.static(path.join(__dirname,'/public')));
app.use(express.static(path.join(__dirname,'/client')));
app.use('/templates',express.static(path.join(__dirname,'/client/templates')));
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function(req,res)
{
   res.sendFile(path.join(__dirname+'/client/index.html'));

});
app.get('/mock',function(req,res)
{
//  console.log('a request has been made');
  res.setHeader('Content-Type','application/json')
  res.end(JSON.stringify([{CustomerName:"Rivers Taxi",CustomerMobile:"1767-266-7777",CustomerPhone:"1767-446-7788", CustomerId:1},{CustomerName:"Malys Taxi",CustomerMobile:"1767-266-7774",CustomerPhone:"1767-446-7785", CustomerId:1}]));
}
);
app.get('/countries', function(req,res){
  res.setHeader('Content-Type','application/json')
   res.sendFile(path.join(__dirname+'/public/countries.json'));
});
app.get('/date',function(req,res)
{
   var date  = new Date();
  var year =  date.getFullYear();
   res.setHeader('Content-Type','application/json')
   res.end(JSON.stringify({year:year}));
});
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname+'/client/index.html'));
});
 
app.listen(8088);