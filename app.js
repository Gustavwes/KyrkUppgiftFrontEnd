const express = require('express');
const app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');

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
app.get('/Bild', function (req, res) {
    res.send();
});



console.log("Lyssnar på port 6662");