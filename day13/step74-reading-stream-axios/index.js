const axios = require("axios");
const fs = require("fs");
const zlib = require("zlib")
/*
axios("https://rollic.in/")
//.then(res => console.log(res.data))
.then(res => fs.writeFileSync("temp/rollic.html",res.data,"utf-8"))
.catch(error =>console.log("Error : ",error))
*/


axios({
    method: "get",
    url: "http://rollic.com",
    responseType : "stream"
})
.then(res=>{
    //res.data.pipe(fs.createWriteStream("temp/rollic2.html"));
    res.data.pipe(zlib.createGzip()).pipe(fs.createWriteStream("temp/rollic.zip"));
})
.catch(error => console.log(error))
