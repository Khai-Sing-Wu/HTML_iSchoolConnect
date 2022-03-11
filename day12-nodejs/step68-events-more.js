let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.on("randomEvent",function(){
    console.log("randomEvent occurred");
});
setTimeout(function(){
    myevent.emit("randomEvent");
},2000);
