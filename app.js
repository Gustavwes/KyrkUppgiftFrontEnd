const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(6662);

app.get('/1', function(req, res){
    res.sendFile(__dirname + '/public/test.html');
});

console.log("Lyssnar på port 6662");