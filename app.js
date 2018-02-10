const express = require('express');
const app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');

var firebase = require('firebase');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

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
app.get('/Admin', function (req, res) {
    res.sendFile(__dirname + '/public/Admin.html');
});

app.post("/login", function (req, res) {
    if (req.body.username == "admin" && req.body.password == "password") {
        var v = firebase.database();

        v.ref('/bokningar').once('value').then(function (snapshot) {
            var html = "<h1>Bokningar</h1>";
            html += `<table>`
            html += "<tr><th>Veckor</th><th>Att betala</th><th>Förnamn</th><th>Efternamn</th>";
            html += "<th>Personnummer</th><th>Adress</th><th>Postnummer</th><th>Ort</th>";
            html += "<th>Telefon</th><th>Mail</th><th>Bokningsdatum</th></tr>";
            snapshot.forEach(childSnap => {
                if (childSnap.val()) {
                    html += "<tr>";
                    html += "<td>" + childSnap.val().veckor + "</td>";
                    html += "<td>" + childSnap.val().betala + "</td>";
                    html += "<td>" + childSnap.val().förnamn + "</td>";
                    html += "<td>" + childSnap.val().efternamn + "</td>";
                    html += "<td>" + childSnap.val().personnr + "</td>";
                    html += "<td>" + childSnap.val().adress + "</td>";
                    html += "<td>" + childSnap.val().postnr + "</td>";
                    html += "<td>" + childSnap.val().ort + "</td>";
                    html += "<td>" + childSnap.val().telefon + "</td>";
                    html += "<td>" + childSnap.val().mail + "</td>";
                    html += "<td>" + childSnap.val().bokdatum + "</td>";
                    html += "</tr>";
                }
            });
            html += `</table>`

            //send back html when everything is done
            res.send(html);
        });
    }
    else {
        res.sendFile(__dirname + "/public/Fail.html");
    }
})

app.post("/form", function (req, res) {
    // console.log(req.body);
    var v = firebase.database();
    v.ref('bokningar').push(req.body);

    res.redirect('/');
});

function initFirebase() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCaejMkwFkMzYI0Y3Ahv3AA1sTldb7hiGA",
        authDomain: "skolan-1a938.firebaseapp.com",
        databaseURL: "https://skolan-1a938.firebaseio.com",
        projectId: "skolan-1a938",
        storageBucket: "",
        messagingSenderId: "415041712935"
    };

    firebase.initializeApp(config);
}

initFirebase();

app.listen(6662);

console.log("Lyssnar på port 6662");