const logEvents = require('./logEvents');
const EventEmmitter = require("events");
class MyEmitter extends EventEmmitter{};

const myEmitter = new MyEmitter();
myEmitter.on('log',(msg)=>{
    logEvents(msg);
});
myEmitter.emit("log","log event emitted"); 



