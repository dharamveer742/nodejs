// core modules vs npm modules :- node modules that were developed by third party or other developers 
console.log("testing");
/* npm i nodemon -g :- Nodemon is a command-line tool that helps with the speedy development of Node. js applications. 
It monitors your project directory and automatically restarts your node application when it detects any changes. 
This means that you do not have to stop and restart your applications in order for your changes to take effect.  */


// npm init -y :- to skip the questions
// npm i date-fns
// npm install (when clone any  reposiratory):- reads the package.json file and installs the  node modules which are needed to run that appliaction

const {format} = require('date-fns');
console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'));

/* how to add a dev dependency for example we are installing  (nodemon as a dev dependency) 
     npm i nodemon -D -> added in (package.json)
*/

//server use scripts

const {v4:uuid} = require('uuid');
console.log(uuid());

