console.log("Sample Reading Grove Kit Temperature Sesnsor");


var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

//Create Socket.io server
var http = require('http');

var myDigitalPin3 = new mraa.Gpio(3);
myDigitalPin3.dir(mraa.DIR_OUT);
var myDigitalPin4 = new mraa.Gpio(4);
myDigitalPin4.dir(mraa.DIR_OUT);
var myDigitalPin5 = new mraa.Gpio(5); //setup digital read on Digital pin #5 (D5)
myDigitalPin5.dir(mraa.DIR_OUT); //set the gpio direction to output
var myDigitalPin6 = new mraa.Gpio(6);
myDigitalPin6.dir(mraa.DIR_OUT);
var myDigitalPin7 = new mraa.Gpio(7);
myDigitalPin7.dir(mraa.DIR_OUT);
var myDigitalPin8 = new mraa.Gpio(8);
myDigitalPin8.dir(mraa.DIR_OUT);





var app = http.createServer(function (req, res) {
    'use strict';
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var cmd = require('url').parse(req.url).path;
    if (cmd.toString() != "/favicon.ico")
        if (cmd == "/0") {
            console.log("all off");
            res.end('Hello world from Intel IoT platform! 0, alloff');
            myDigitalPin3.write(0);
            myDigitalPin4.write(0);
            myDigitalPin5.write(0); //set the digital pin to high (0)
            myDigitalPin6.write(0);
            myDigitalPin7.write(0);
            myDigitalPin8.write(0);
        }
        else if (cmd == "/1") {
            console.log("left on");
            res.end('Hello world from Intel IoT platform! 1, lefton');
            myDigitalPin5.write(1); //set the digital pin to high (1)
            myDigitalPin6.write(1);
            myDigitalPin4.write(0);
            myDigitalPin7.write(1);
            myDigitalPin8.write(0);
            myDigitalPin3.write(0);
        }
        else if (cmd == "/2") {
            console.log("right on");
            res.end('Hello world from Intel IoT platform! 2, righton');
            myDigitalPin5.write(0); //set the digital pin to high (1)
            myDigitalPin6.write(0);
            myDigitalPin4.write(1);
            myDigitalPin7.write(0);
            myDigitalPin8.write(1);
            myDigitalPin3.write(1);
        }
}).listen(1337);

/*

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var myDigitalPin5 = new mraa.Gpio(5); //setup digital read on Digital pin #5 (D5)
myDigitalPin5.dir(mraa.DIR_OUT); //set the gpio direction to output
myDigitalPin5.write(1); //set the digital pin to high (1)

*/