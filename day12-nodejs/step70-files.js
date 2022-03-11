var fs = require("fs");


//fs.writeFileSync("temp.txt","Welcome to this file");

fs.writeFile("temp.txt","Welcome to this file",function(error){
    if(error){
        console.log("Error :",error);
    }else{
        console.log("File created");
    }
});

//console.log(fs.readFileSync("temp.txt","utf-8"));

fs.readFile("temp.txt","utf-8",function(error,data){
    if(error){
        console.log("Error :",error);
    }else{
        console.log(data);
    }
});


fs.watchFile("temp.txt",function(){
    console.log("file changed");
})


setTimeout(function(){
    fs.appendFileSync("temp.txt","\nHello there","utf-8");
},4000);