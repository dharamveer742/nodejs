// file system module  in node js 
// create directory and delete directory 
// create a stream

const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path')

/*fs.readFile('./starter.txt',(err,data)=>{   //   path.join(__dirname,'starter.txt')  // err comes in the parameter of callback function
    if(err) throw err;
    console.log(data.toString());
})

process.on('uncaughtException',err=>{   // process is a global object and instance of eventemitter  on property is used to bind a function with the event  
    console.error('There was an uncaught error : ${err}')   // emit is used to fire an event.
    process.exit(1);   // uncaughtException and exit are  events 
})   */


/* psuedocode 

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
Listener functions must only perform synchronous operations. The Node.js process will exit immediately after calling the 'exit' event listeners 
causing any additional work still queued in the event loop to be abandoned

*/

/* callBack hell 
// use async and await to avoid  the callback hell
fs.writeFile(path.join(__dirname,'reply.txt'),"Writing first file in node js again.",(err)=>{  // method replaces the specified file and content
    if(err) throw err;
    console.log("write completed");
    fs.appendFile(path.join(__dirname,'reply.txt'),"\nTesting text.",(err)=>{  
            if(err) throw err;
            console.log("append completed");
            fs.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,'newReply.txt'),(err)=>{  
                if(err) throw err;
                console.log("Rename completed");
            })
    })
    
})

*/



const fileOps =  async()=>{
    try{
       const data =  await fsp.readFile(path.join(__dirname,'files','starter.txt'),'utf8');   // fsPromises.writeFile() method returns a Promise.  The await keyword makes the function pause the execution and wait for a resolved promise before it continues
       console.log(data);
       await fsp.unlink(path.join(__dirname,'files','starter.txt'));
       await fsp.writeFile(path.join(__dirname,'files','fsPromisesWrite.txt'),data);
       await fsp.appendFile(path.join(__dirname,'files','fsPromisesWrite.txt'),'\nappending with fsPromises');
       await fsp.rename(path.join(__dirname,'files','fsPromisesWrite.txt'),path.join(__dirname,'files','renamed.txt'))
       const newdata =  await fsp.readFile(path.join(__dirname,'files','renamed.txt'),'utf-8');   
       console.log(newdata);
    }
    catch(err){
        console.error(err);
    }
}

fileOps();







