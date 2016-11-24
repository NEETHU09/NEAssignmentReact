var express = require('express');

var app = express();

app.listen(3000, function(){
   console.log("Express server is running on port 3000");
});

app.get('/', function(req, res){
  res.send("hello from express js");
});

app.get('/a', function(req, res){
  res.send("hello from express a");
});

app.get('/b', function(req, res){
  res.send("hello from express b");
});

app.get('/c', function(req, res){
  res.send("hello from express c");
});
