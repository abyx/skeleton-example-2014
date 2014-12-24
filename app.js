var Q = require('q');
var mongo = require('mongodb').MongoClient;
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/example', function(request, response) {
  response.send({success: true});
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(' [*] Listening at http://%s:%s', host, port);
});
