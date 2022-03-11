/*
create an event that gets called once every 2 seconds for 5 times
*/
let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.on("randomEvent",function(){
    console.log("randomEvent occurred");
});
var x = 1;
var intervalID = setInterval(function(){
    myevent.emit("randomEvent");
},2000);

setTimeout(function(){
    clearInterval(intervalID);
    console.log("event ended");
},12000);

