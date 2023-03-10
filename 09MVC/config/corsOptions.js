const whiteList = ["http://localhost:3500","https://www.google.com","https://www.yoursite.com","http://127.0..1:5500"] // domains allowed to access the backend
const corsOptions = {
    origin:(origin,callback)=>{
        if(whiteList.indexOf(origin)!==-1 || !origin){
            callback(null,true); // null -> if error , true -> origin is sent back means it is allowed
        }
        else{
            callback(new Error("Not allowed by CORS"));
        }
        
    },
    optionsSuccessStatus:200
}
module.exports = corsOptions;