var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var userSchema = new Schema({
  username: {type: String},
  password: {type: String}
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema);


module.exports = mongoose.model('User', User);
