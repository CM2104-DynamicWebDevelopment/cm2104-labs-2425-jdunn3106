var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");
});

app.get('/joke', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var randomJoke = knockknock();
    res.end(randomJoke);
});

app.get('/add', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    res.send("X + Y="+(x+y));
});

app.get('/calc', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var operator = req.query.operator;
    
    if (operator === "add") {
        res.send("X + Y="+(x+y));
    } else if (operator === "sub") {
        res.send("X - Y="+(x-y));
    } else if (operator === "mul") {
        res.send("X * Y="+(x*y));
    } else {
        res.send("X/Y="+(x/y));
    }
});

app.listen(8080);