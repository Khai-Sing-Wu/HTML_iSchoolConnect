const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.use(express.static(__dirname));


io.on("connection",function(socket){
    console.log("client socket connected");
    socket.emit("message","Hello from socket.io");
})

io.on("disconnect",function(){
    console.log("client socket disconnected");
})


server.listen(6060,"localhost",function(error){
    if(error){
        console.log("Error :",error);
    }else{
        console.log("server is now live on localhost:6060")
    }
})