let http = require("http");
let message = 'This is my page';
let server = http.createServer(function(request, response){
    response.writeHead(200,"ALL IS WELL",{
        'Content-Type' : 'text/plain'
    })
    response.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    </head>
                    <body>
                        <h1> ${message} </h1>
                    </body>
                    </html>`);
    response.end();
});


server.listen(1010,"localhost",error=>{
    if(error){
        console.log("Error :",error);
    }else{
        console.log("Server is now live on localhost:1010");
    }
});




