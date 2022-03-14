let http = require("http");
let message = 'This is my page';
let server = http.createServer(function(request, response){
    response.writeHead(200,"ALL IS WELL",{
        'Content-Type' : 'text/plain'
    })
    response.write("<!DOCTYPE html>");
    response.write("<html lang='en>");
    response.write("<head>");
    response.write("<meta charset='UTF-8'>");
    response.write("<meta http-equiv='X-UA-Compatible' content='IE=edge'>");
    response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    response.write('<title>Document</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<h1>'+message +'</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
});


server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error :",error);
    }else{
        console.log("Server is now live on localhost:1010");
    }
});




