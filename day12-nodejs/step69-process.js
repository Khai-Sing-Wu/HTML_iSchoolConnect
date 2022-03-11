//console.log(process.argv);


let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

process.nextTick(function(){
    myevent.emit("iSC");
});

myevent.on("iSC", function(){
    console.log("iSC event happened");
})

console.log("hello from iSC");

for(let i = 0; i < 100; i++){
    console.log(i);
}