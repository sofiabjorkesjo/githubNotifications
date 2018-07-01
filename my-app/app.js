
const express = require('express');
const main = require('./routes/main.js');
const app = express();
const port = process.env.PORT || 5000;

app.use('/', main);

app.listen(port, function() {
  console.log('Started on ' + port
)});