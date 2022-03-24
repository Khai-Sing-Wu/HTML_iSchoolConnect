const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname));
app.use(express.static(__dirname+'/public'));

io.on("connection", function(socket){
    console.log("socket connection successful");
    socket.emit("serverMessage","Client connected");


    socket.on("clientMessage",function(message){
        //console.log("Client Message :", message);
        //console.log("Client Message :",message.split("").reverse().join(""));
        //
        io.emit("serverMessage", message.split("").reverse().join(""));
        //socket.emit("message", message.split().reverse().join());

        //console.log("Client Message :",message.split("").join(""));

    })
    
    socket.on("disconnect",function(){
        console.log("socket connection disconnected");
    })
})


http.listen(2020);
console.log("live on localhost:2020");