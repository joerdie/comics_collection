var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

app.use(express.static(path.join(__dirname,'public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = http.createServer(app);
server.listen(3000);
