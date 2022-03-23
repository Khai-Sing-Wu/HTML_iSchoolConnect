let mysql = require("mysql");

let connection = mysql.createConnection({
    host : "localhost",
    database : "ischoolDB",
    user : "root",
    password : ""
})

connection.connect(function(error){
    if(error){
        console.log("Error :",error);
    }else{
        //console.log("MySQL connected - ischoolDB");
         //create a database
        /*
        connection.query("Create DATABASE ischoolDB",function(error,result){
            if(error){
                console.log("Error :",error);
            }else{
                console.log("Result :",result);
            }
        })
        */

        /*
        //create a table
        let sql ="CREATE TABLE participants (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(300));";
        connection.query(sql,function(error,result){
            if(error){
                console.log("Error :",error);
            }else{
                console.log("Result :",result);
            }
        })
        */
        
        /*
        let sql= "INSERT INTO participants (name, email) VALUES ('Khai', 'khaisingwu@gmail.com');";
        connection.query(sql, function(error,result){
            if(error){
                console.log("Error :", error);
            }else{
                console.log("Result :",result);
            }
        })
        */

        /*
        //drop a database
        connection.query("DROP DATABASE ischoolDB",function(error,result){
            if(error){
                console.log("Error :",error);
            }else{
                console.log("Result :",result);
            }
        })
        
        */
        /*
        //inserting via collection
       let heros =[
           ["Clark","clark@kent.com"],
           ["Bruce","bruce@wayne.com"],
           ["Diana","diana@prince.com"]
       ];
       let sql = "INSERT INTO participants (name, email) VALUES ?";
       connection.query(sql,[heros],function(error,result){
        if(error){
            console.log("Error :",error);
        }else{
            console.log("Result :",result);
        }
       })
       */

       /*
       //regular insertion
       let sql = "INSERT INTO participants (name, email) VALUES ('Barry', 'barry@allen.com'), ('Hal', 'hal@jordan.com'), ('Shayera', 'shayera@hol.com')";
       connection.query(sql,function(error,result){
        if(error){
            console.log("Error :",error);
        }else{
            console.log("Result :",result);
        }
       })
       */
       /*
       
       //query -- select * from table;
       let sql = "SELECT * FROM participants;";
       connection.query(sql,function(error,result){
        if(error){
            console.log("Error :",error);
        }else{
            result.forEach(recordSet=>{
                console.log(recordSet.name, recordSet.email)
            })
        }
       })
       */
       
       // filtered query
       let sql = "SELECT * FROM participants WHERE id = 1;";
       connection.query(sql,function(error,result){
        if(error){
            console.log("Error :",error);
        }else{
            console.log("Response :",result);
        }
       })
    }
});

