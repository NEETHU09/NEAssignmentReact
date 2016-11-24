var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weatherModel = new Schema({
  title : String,
  genre : String,
  rating : Number,
  isReleased : {type:Boolean, default:true}
});

module.exports = mongoose.model("Weather", weatherModel);
