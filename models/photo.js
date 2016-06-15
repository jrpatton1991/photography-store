var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var photoSchema = new Schema({
  largeUrl: {type: String}
});

var Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
