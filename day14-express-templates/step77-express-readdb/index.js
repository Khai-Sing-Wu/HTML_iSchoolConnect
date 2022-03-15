const express = require("express");
const mongoose = require("mongoose");
let app = express();

//schema
//objectID
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    list : Array
}))


mongoose.connect("mongodb+srv://wumark46:wumark46@mycluster.2zbbx.mongodb.net/onlinedb?retryWrites=true&w=majority");
app.get("/",function(req, res){
    let herolist= [];
    Hero.find().then((dbres)=>{
        herolist = dbres[0].list;
        res.render("home.pug",{
            templist : herolist
        })
    }).catch((error)=>{
        console.log("Error :",error);
    }).finally(()=>{
        console.log("promise completed")
    });
})

app.listen(5050);

console.log("server is now running on localhost:5050");
