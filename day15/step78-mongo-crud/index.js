const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());

let errorhandler = function(error) { console.log("Error :",error) }


const url = "mongodb+srv://wumark46:wumark46@mycluster.2zbbx.mongodb.net/onlinedb?retryWrites=true&w=majority";
//ORM
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    _id : ObjectId,
    username : String,
    usermail : String,
    usercity : String
}));




mongoose.connect(url)
.then(()=>console.log("DB connected"))
.catch(error=> console.log("Error is ",error));


//CRUD Routes
//------------------------------------------
app.get("/data",function(req,res){
    console.log("get request for data received");
    /*
    res.send([
            {
                name: "Ironman",
                email : "tony@stark.com",
                city : "New York"
            }
    ])
    */
   User.find(function(error,users){
       if(error){
           errorhandler(error);
       }else{
           res.json(users)
       }

   })
});

app.post("/add",function(req,res){
    //console.log("add user post request received",req.body);
    let user = new User(req.body);
    user
    .save()
    .then(function(dbres){
        res.json({'message' : 'user added'})
    })
    .catch(function(error){
        errorhandler(error);
    })
})

app.delete("/delete/:id",function(req,res){
    User.findByIdAndDelete({_id : req.params.id}, function(error,deleteduser){
        if(error){errorhandler(error)}
        else{
            res.json({'message':'user deleted'})
        }
    })
});

app.listen(5050,function(error){
    if(error){
        errorhandler(error);
    }else{
        console.log("Server is live on localhost:5050");
    }
});

//mongodb+srv://wumark46:wumark46@mycluster.2zbbx.mongodb.net/onlinedb?retryWrites=true&w=majority
