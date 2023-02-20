// node js vs vanilla js 
/*   1.node js runs on server while js runs on browser  
     2.The console is termianl window 
     3.Global object instead of window object 
        console.log(global)  
     4. node js has common core modules (path-> This module provides utilities for working with file and directory paths.)  
     5. commonjs modules instead of ES6 (require not import )  

     */
 
/*const os = require('os')   Node.js core modules 

console.log(os.type())
console.log(os.version())
console.log(os.homedir()) 
console.log("Hello world")

console.log(__dirname)
console.log(__filename) 

const path = require('path')
console.log("Path Module")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))    */

const math = require("./Math")

const {add,subtract,multipy,divide} = math;   // object destructuring 

console.log(add(1,4));
console.log(__dirname)
