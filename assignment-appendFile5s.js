var fs = require("fs");

fs.watchFile("temp.txt",function(){
    console.log("file updated");
});

setInterval(function(){
    fs.appendFileSync("temp.txt","\nAdded new line","utf-8");
},5000);