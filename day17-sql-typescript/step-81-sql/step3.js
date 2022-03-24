const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
app.use(express.static(__dirname));
app.use(express.static(__dirname+"/public"));
io.on("connection", function(socket){
    console.log("socket connection success");
    socket.emit("serverMessage","Client connected");
    socket.on("clientMessage",function(req){
        //message : req.message.split("").reverse().join("")
        io.emit("serverMessage",{
            username : req.username,
            message : req.message
        }); 
    })
    socket.on("disconnect",function(){
        console.log("client disconnected")
    });
});
http.listen(2020);
console.log("server is now live on localhost:2020");
