var express = require('express');
var api = require('./routes/api.js');
var app = express();

mongoose.connect('mongodb://localhost/db-dev', myOptionsObj);

// application configuration
require('./config/express')(app);

// routing set up
app.use('/api', api);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

module.exports = server