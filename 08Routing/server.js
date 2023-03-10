const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
const logEvents = require("./middlewareFiles/logEvents");
const errorHandler = require("./middlewareFiles/errorHandler.js");
const cors = require("cors");  // third party middleware 

// custom middleware
app.use((req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`,"reqLog.txt");
    console.log(`${req.method} ${req.path}`);
    next();
})
// config cors
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
 //app.use(cors());    // Enable All CORS Requests
app.use(cors(corsOptions));

// built in middlewares 
//express.urlencoded handles incoming requests with URL-encoded payloads in other words form-data
app.use(express.urlencoded({extended:false}));
// express.jdon handles incoming requests with json payloads
app.use(express.json());
// express.static serves static files such as HTML files, images, and so on.
app.use(express.static(__dirname));

app.use("/",require("./routes/root"));
app.use('/subdir',require("./routes/subdir"));
app.use('/employees',require("./routes/api/employees"));


app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts("html")){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if(req.accepts("json")){
        res.json({error: "404 not found"});
    }
    else{
        res.type("txt").send("404not found");
    }
    
});

app.use(errorHandler);  // custom error handler 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










