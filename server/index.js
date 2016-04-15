var express = require('express');

var app = express();

app.get('/', function(req,res) {
   res.send('Good afternoon Steve!'); 
});

app.listen(5000);
console.log('http://localhost:5000/');
