var express = require('express');

var weatherRouter = express.Router();

weatherRouter.route('')
  .get(function(req, res){
    res.send("List of Weather in Cities");
  });

  module.exports = weatherRouter;
