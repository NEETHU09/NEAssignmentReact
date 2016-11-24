var express = require('express');
var weatherRouter = require('./routes/weatherRouter');

var app = express();

app.listen(3000, function(){
   console.log("Express server is running on port 3000");
});


app.use('/weather', weatherRouter);







// var http = require('http');
//
// var handleRequests = function(req, res){
//   if(req.url === "/") {
//       res.write("Hello from Nodejs");
//     }
//   else if(req.url === "/Products") {
//       res.write("product");
//     }
//   else if(req.url === "/kart") {
//       res.write("kart");
//     }
//   res.end();
// };
//
// var server = http.createServer(handleRequests);
//
// server.listen(3000, function(){
//     console.log("Server is running on port number 3000");
// });
