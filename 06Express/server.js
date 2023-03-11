const path = require("path");
const express = require("express");
const app = express();

const port = process.env.port || 3500;

app.get("^/$|/index(.html)?",(req,res)=>{
    //res.sendFile("./views/index.html",{root:__dirname});
    res.sendFile(path.join(__dirname,"views","index.html"));
});


app.get("/new-page(.html)?",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","new-page.html"));
});

app.get("/old-page(.html)?",(req,res)=>{
    res.redirect(301,path.join(__dirname,"views","new-page.html"));  // by default express will send 302
});
// route handlers :- Route handlers are the blocks of code that handle logic for your routes. This can be in the form of a function, an array of functions, or combinations of both
app.get("/change(.html)?",(req,res,next)=>{
    console.log("attempted");
    next();
},(req,res)=>{
    res.send("Hello World");
})

// chaining route handlers 
const one = function(req,res,next){
    console.log("one");
    next();
 }
 const two = function(req,res,next){
    console.log("two");
    next();
 }
 const three = function(req,res){
    console.log("three");
    res.send("routes finished");
 }

 app.get("/hello(.html)?",[one,two,three]);

app.get("/*",(req,res)=>{  // / and else anything 
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));  // express will find the file and send 200 instead of 404
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});


