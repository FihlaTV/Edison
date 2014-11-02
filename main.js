console.log("Sample Reading Grove Kit Temperature Sensor");

//Create Socket.io server
var http = require('http');
var app = http.createServer(function (req, res) {
    'use strict';
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h1>Hello world from Intel IoT platform!</h1>');
    var cmd = require('url').parse(req.url).path;
    if (cmd.toString() != "/favicon.ico")
        if (cmd == "/0") 
            console.log("all off");
        else if (cmd == "/1")
            console.log("left on");
        else if (cmd == "/2")
            console.log("right on");
}).listen(1337);