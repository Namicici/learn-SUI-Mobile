"use strict";
var express = require('express');
var port = 8000;
var app = express();

app.use("/", express.static(__dirname + '/dist'));

app.get("/", function(req, res){
    res.redirect("/");
});

app.listen(port, function(){
	console.log('start at port ' + port);
});
