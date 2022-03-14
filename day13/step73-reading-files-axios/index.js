const axios = require("axios");
const fs = require("fs");


axios("http://arcstellar.com")
.then(function(res){
    //console.log(res);
    fs.writeFileSync("tempdata/arcstellar.html",res.data,"utf-8");
}).catch(function(error){
    console.log(error);
})
