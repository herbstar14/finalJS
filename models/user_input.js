const mongoose = require('mongoose')
const Schema = mongoose.Schema

var user_input_Schema = new Schema({
    title:String,
    description:String,
    pubished_data:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongoose.model('user_input', user_input_Schema)