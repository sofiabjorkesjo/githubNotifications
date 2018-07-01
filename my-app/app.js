
const express = require('express');
const main = require('./routes/main.js');
const app = express();
const port = process.env.PORT || 5000;

app.use('/', main);

<<<<<<< HEAD
app.listen(port, function() {
  console.log('Started on ' + port
)});
=======
app.listen(port, () => console.log(`Listening on port ${port}`));

console.log('test')
>>>>>>> ae0d65cf8d90fdb473f5863501a44d42f2595d3c
