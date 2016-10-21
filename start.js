"use strict";
var express = require('express');
var bodyParser = require("body-parser");
var port = 9000;
var app = express();

var router = require("./server/router")

app.use("/", express.static(__dirname + '/dist/'));

app.get("/", function(req, res){
    res.redirect("/views/home/");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next){
    router.route(app);
    next();
});

app.listen(port, function(){
	console.log('start at port ' + port);
});
