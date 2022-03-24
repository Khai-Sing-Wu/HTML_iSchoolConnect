const express = require("express");
const config = require("./config.json");
const routes = require("./routes/user.routes");
const errorHandler = require("./helpers/errorhandler.helper");

const app = express();

app.use(express.static(__dirname+"/public"))
.use(express.json())
.use(routes);



app.listen(config.port,config.host,function(error){
    if(error){
        errorHandler(error)
    }
    else{ 
        console.log(`Server is now live on ${config.host}:${config.port}`);
    }
});