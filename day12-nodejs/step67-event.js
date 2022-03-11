let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.addListener("iSchoolConnect",iSchoolConnectHandler1);
myevent.addListener("iSchoolConnect",iSchoolConnectHandler2)

myevent.addListener("ySchoolConnect",ySchoolConnectHandler);

myevent.emit("iSchoolConnect",{time :new Date(), message: "hey there"});
myevent.emit("ySchoolConnect");

function iSchoolConnectHandler1(event){
    console.log("iSchoolConnect Event happened",event);
}
function iSchoolConnectHandler2(event){
    console.log("iSchoolConnect Event happened",event);
}

function ySchoolConnectHandler(){
    console.log("ySchoolConnect Event happened");
}

/*
console.log(myevent.listenerCount("iSchoolConnect"));

console.log(myevent.eventNames());
*/
console.log(myevent.listenerCount("ySchoolConnect"));