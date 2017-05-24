/**
 * Created by karaduman on 24.05.2017.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://olcay:olcay123@ds151141.mlab.com:51141/test_db");

module.exports = mongoose;