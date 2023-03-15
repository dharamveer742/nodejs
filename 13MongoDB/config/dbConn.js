const mongoose =require("mongoose");

const connectDB = async ()=>{
    try{
    mongoose.connect(process.env.DATABASE_URI,{
        
        useUnifiedTopology:true,
        useNewUrlParser:true  // // useNewUrlParser: true, etc. to mongoose.connect() to avoid the DeprecationWarning.
        

    });    

    }
    catch(err){
        console.error(err);
    }
}
module.exports = connectDB;