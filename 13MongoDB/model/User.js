const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// defining a schema for user
const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    roles:{
        User:{
            type:Number,
            default:2001
        },
        Editor:Number,
        Admin:Number
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:String
});

// creating model from defined schema
module.exports = mongoose.model("User",userSchema);