const express = require('express');
const app = express();

//Middleware
app.use(express.static('public'));

app.listen(6662);
console.log("Lyssnar på port 6662");