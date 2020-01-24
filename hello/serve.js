var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send(`Hello ${process.env.GREETING || 'world'}!`);
});

app.listen(3000);
