const express = require("express");
const mysql = require("mysql");
const errorHandler = require("../helpers/errorhandler.helper");
const config = require('../config.json');

let routes = express.Router();

let connection = mysql.createConnection({
    host: config.host,
    database : config.database,
    user : config.user,
    password : config.password
});

routes.get('/data',function(req, res){
    console.log("Get request for data recieved");

    let query1 = 'Select * from demo;';
    connection.query(query1,function(error,result){
        if(error){
            errorHandler(error);
        }else{
            res.json({result});
        }
    });
});

routes.delete('/delete/:id',function(req,res){
    let query2 = `DELETE FROM demo WHERE id = ${req.params.id};`;
    connection.query(query2,function(error,result){
        if(error){
            errorHandler(error);
        }else{
            console.log("Data deleted");
        }
    });
});


routes.get('/edit/:id',function(req,res){
    let query2 = `DELETE FROM demo WHERE id = ${req.params.id};`;
    connection.query(query2,function(error,result){
        if(error){
            errorHandler(error);
        }else{
            res.json(result[0]);
        }
    });
});



routes.post('/edit/:id', function(req, res){
    username = req.body.username;
    usermail = req.body.usermail;
    usercity = req.body.usercity;
    let query3 = `UPDATE demo SET username='${username}', usercity='${usercity}', usermail='${usermail}' WHERE id = ${req.params.id}`

    connection.query(query3, (error, result) => {
        if (err) {
            errorHandler(error);
        } else {
            console.log('Data Updated.');
        }
    });
});


routes.post('/add', function(req, res){
    let username = req.body.username;
    let usercity = req.body.usercity;
    let usermail = req.body.usermail;

    let query4 = `INSERT INTO demo (username, usercity, usermail) VALUES ('${username}', '${usercity}', '${usermail}')`
    connection.query(query4, function(error,result){
        if (error) {
            errorHandler(error);
        } else {
            console.log('Data Added');
        }
    });
});

module.exports = routes;


