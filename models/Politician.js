/**
 * Created by dougritzinger on 10/13/15.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var politicianSchema = new Schema({
    name: String,
    about: String,
    jobs: String,
    rank: String
})