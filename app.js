var express = require("express");
var WebSocketServer = require("ws").Server;
var poller = require("./js/githubPoller")

var app = express();


var httpServer;
var wsServer;

wsServer = new WebSocketServer({port: 3001});

console.log("Waiting for socket connection...");
wsServer.on("connection", function(ws) {
  ws.on("message", function(message) {
    console.log("Received message '%s'", message);
    switch (message) {
      case "start" :
        poller.start(function(text) {
          console.log("Sending: " + text);
          ws.send(text);
        });
        break;
      case "stop" :
        poller.stop();
        break;
    }
  });
});

app.use(express.static(__dirname + "/public"));

var port = 3000;
httpServer = app.listen(port, function () {
  console.log("Listening on port " + port + "...");
});

