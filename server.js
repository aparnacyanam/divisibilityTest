/**
 * Created by Aparna on 6/18/2015.
 */
var http = require('http');
var express = require('express');
var app=express();
app.use('/', express.static(__dirname + '/'));
app.get('/index', function (req, res) {
    res.sendFile(__dirname +'/index.html');
});

http.createServer(app).listen(8000);
console.log("Created Server at port 8000");