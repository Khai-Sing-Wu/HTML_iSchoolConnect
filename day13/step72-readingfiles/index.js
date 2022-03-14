const fetch = require("fetch");
const fs = require("fs");


fetch.fetchUrl("http://arcstellar.com",function(error, meta, data){
    if(error){
        console.log("Error :",error);
    }else{
        fs.writeFileSync("tempFiles/arcstellar.html",data,"utf-8");
    }
})
