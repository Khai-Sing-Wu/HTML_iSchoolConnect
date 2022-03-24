const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname));
app.use(express.static(__dirname+'/public'));

io.on("connection", function(socket){
    console.log("socket connection successful");
    socket.emit("serverMessage","Client connected");
    socket.on("clientMessage",function(){
        console.log("Client Message happened");
    })
    socket.on("disconnect",function(){
        console.log("socket connection disconnected");
    })
})


http.listen(2020);
console.log("live on localhost:2020");