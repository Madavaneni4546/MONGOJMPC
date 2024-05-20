const mongoose = require('mongoose');

const stdschema = mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    name:String,
    phn:Number,
    email:String
});
const stdmodel = mongoose.model("student" , stdschema)
module.exports = stdmodel;
