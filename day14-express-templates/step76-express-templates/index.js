const express = require("express");
const res = require("express/lib/response");
const app = express();

//express confg - set / use
//middleware - use (intervene bw req and res)

/*
app.use(express.static(__dirname));
app.use("/assets", express.static(__dirname+"/images"));


app.get("/",function(req, res){
    //res.send("Hello from express");
    res.sendFile(__dirname+"/index.html");
})
*/
/*
app.get("/",function(req,res){
    res.render("home.ejs",{
        companyname : "iSchoolConnect",
        registereduser : true
    });
})
*/
/*
app.get("/",function(req,res){
    res.render("home.pug",{
        companyname : "iSchoolConnect",
        registereduser : false
    });
})
*/
app.locals.pretty = true;
//let heroes = ['Iron Man',"Captain America", "Thor"];
let heroes = [];
/*
app.get("/",function(req,res){
    res.render("home.pug",{
        companyname: "iSC" ,
        registereduser: true,
        heroes : heroes
    });
})
*/
app.use(express.urlencoded( {extended : true} ));
app.get("/",function(req,res){
    res.render("home.ejs",{
        companyname: "iSC" ,
        registereduser: true,
        heroes : heroes
    });
})
app.post("/",function(req,res){
    heroes.push(req.body.nexthero);
    res.redirect("/");
});

app.listen(4040,"localhost",function(error){
    if(error){
        console.log("Error :",error);
    }
    else{
        console.log("server is now live");
    }
});
