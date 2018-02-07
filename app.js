const express = require('express');
const app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');

var firebase = require('firebase');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(6662);

app.get('/1', function (req, res) {
    res.sendFile(__dirname + '/public/Hem.html');
});
app.get('/DettaIngar', function (req, res) {
    res.sendFile(__dirname + '/public/DettaIngar.html');
});
app.get('/Omgivning', function (req, res) {
    res.sendFile(__dirname + '/public/Omgivning.html');
});
app.get('/Historia', function (req, res) {
    res.sendFile(__dirname + '/public/Historia.html');
});
app.get('/Hittahit', function (req, res) {
    res.sendFile(__dirname + '/public/Hittahit.html');
});
app.get('/Omgivning', function (req, res) {
    res.sendFile(__dirname + '/public/Omgivning.html');
});
app.get('/Bokning', function (req, res) {
    res.sendFile(__dirname + '/public/Bokning.html');
});

app.post("/form", function(req, res){
    console.log(req.body);
    // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyCaejMkwFkMzYI0Y3Ahv3AA1sTldb7hiGA",
    //     authDomain: "skolan-1a938.firebaseapp.com",
    //     databaseURL: "https://skolan-1a938.firebaseio.com",
    //     projectId: "skolan-1a938",
    //     storageBucket: "",
    //     messagingSenderId: "415041712935"
    // };
    // firebase.initializeApp(config);
    // var v = firebase.database();
    // v.ref('users').push(req.body);
});



console.log("Lyssnar på port 6662");