// Implement your server in this file.
// We should be able to run your server with node src/server.js

// create express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('../client/build'));
app.use(bodyParser.text());

app.get('/', function (req, res) { res.send('Hello World!');
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
