const e = require("express");
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database : "demoDB",
    password: ""
})

connection.connect(function(error){
    if(error){
        console.log("Error :", error)
    }else{
        //Creating Database
        /*
        connection.query("CREATE DATABASE demoDB", function(error,result){
            if(error){
                 console.log("Error :",error);
            }else{
                 console.log("Response: ",result);
            }
        }) 

        let sql1 ="CREATE TABLE employee (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), dept VARCHAR(30));";
        connection.query(sql1,function(error,result){
            if(error){
                console.log("Error :",error);
            }else{
                console.log("Result :",result);
            }
        })
        
        let employees = [
            ['Rohan','Web Development'],
            ['Ramesh','Cyber Security'],
            ['Sabrish','Sales'],
            ['Abhishek','QA'],
            ['Rakesh','Web Development'],
            ['Mohan','Human Resources'],
            ['Piyush','Cyber Security'],
            ['Palak','Human Resources']
        ]
        
        let sql2= "INSERT INTO employee (name, dept) VALUES ?;";
        connection.query(sql2,[employees], function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                console.log("Result :",result);
            }
        })

        let sql3 = "Create Table gender (id INT PRIMARY KEY, Gender varchar(1));";
        connection.query(sql3,function(error,result){
            if(error){
                console.log("Error :",error);
            }else{
                console.log("Result :",result);
            }
        })
        
        let gen = [
            [1,'M'],
            [2,'M'],
            [3,'M'],
            [4,'M'],
            [5,'M'],
            [6,'M'],
            [7,'M'],
            [8,'F']
        ]
        let sql4 = "INSERT INTO gender (id, Gender) VALUES ?;";
        connection.query(sql4,[gen], function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                console.log("Result :",result);
            }
        })
        */
        
        // showing data of those employees with id > 5
        /*
        let query1 = "Select * from employee where id > 5";
        connection.query(query1,function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                result.forEach(recordSet=>{
                    console.log(recordSet.id, recordSet.name, recordSet.dept);
                })
            }
        })
        */
        
        // showing data of those employees with id < 5
        /*
        let query2 = "Select * from employee where id < 5";
        connection.query(query2,function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                result.forEach(recordSet=>{
                    console.log(recordSet.id, recordSet.name, recordSet.dept);
                })
            }
        })
        */
       // showing alternate names
        /*
        let query3 = "Select name from employee where id%2 = 1";
        connection.query(query3,function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                result.forEach(recordSet=>{
                    console.log(recordSet);
                })
            }
        })
        */

        //joins
        /*
        let query4 = "Select name, gender from employee inner join gender on employee.id = gender.id";
        connection.query(query4,function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                result.forEach(recordSet=>{
                    console.log(recordSet.name, recordSet.gender);
                })
            }
        })
        */
       
        // views
       let query5 = "CREATE VIEW emp_view AS  SELECT name from employee where id < 5";
        connection.query(query5,function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                console.log(result);
            }
        })


      let query6 = "Select * from emp_view";
        connection.query(query6,function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                console.log(result);
            }
        })
    }
})