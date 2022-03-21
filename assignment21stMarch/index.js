const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(express.json());

const url = "mongodb+srv://wumark46:wumark46@mycluster.2zbbx.mongodb.net/quizDB?retryWrites=true&w=majority";

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Question = mongoose.model("Quiz", new Schema({
    id: ObjectId,
    question: String,
    questionCode : String,
    questionCategory : String,
    questionDomain: String,
    answerCategory : String,
    answer1 : String,
    answer2: String,
    answer3 : String,
    answer4: String,
    point1 : String,
    point2 : String,
    point3 : String,
    point4 : String
}));


mongoose.connect(url)
.then(() => console.log("connected to database"))
.catch(error=>console.log(error))

app.get('/admin-dashboard', (req, res) => {
    res.sendFile(__dirname + '/public/admin-dashboard.html');
});


app.post("/admin-dashboard",function(req, res){
    let object = {
        questionCode : req.body['ques-code'],
        questionCategory : req.body['q-cat'],
        questionDomain : req.body['q-dom'],
        question: req.body['ques-phrase'],
        answerCategory : req.body['ans-count'],
        answer1 : req.body['ans-1'],
        answer2: req.body['ans-2'],
        point1 : req.body['point-1'],
        point2 : req.body['point-2']
    }
    if(object.answerCategory == 4){
        object.answer3 = req.body['ans-3'];
        object.answer4 = req.body['ans-4'];
        object.point3 = req.body['point-3'];
        object.point4 = req.body['point-4'];
    }

    let question = new Question(object);

    question
    .save()
    .then(dbRes => {res.redirect("/admin-dashboard")})
    .catch(error=>{console.log("Error :",error)})
});


app.listen(4040, () => console.log('Server live on localhost:5050'));
