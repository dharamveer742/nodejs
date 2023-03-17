const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('Employee',employeeSchema);