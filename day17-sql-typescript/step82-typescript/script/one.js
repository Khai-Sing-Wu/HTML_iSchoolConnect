"use strict";
let message = "";
class Hero {
    constructor(title, fname, lname) {
        this.title = title;
        this.fname = fname;
        this.lname = lname;
        this.city = "default city";
    }
    ;
    sayTitle() {
        console.log(this.title);
    }
    sayFullName() {
        console.log(this.fname + " " + this.lname);
    }
    sayCity() {
        return "City is " + this.city;
    }
}
;
let hero = new Hero("Batman", "Bruce", "Wayne");
hero.sayTitle();
hero.sayFullName();
function saymessage(part1, part2, part3) {
    return part1 + " " + part2;
}
;
function logmessage(part1, part2, part3) {
    console.log(part1 + " " + part2);
}
;
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".log").innerHTML = saymessage("Hello ", "World");
    logmessage("Hello ", "World");
});
