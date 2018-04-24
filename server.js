

var express = require('express');
var app = express();
app.listen(8000);
console.log("listen to port 8000");

app.use(express.static('public'));

app.get('/', function(request, response){
    console.log("Hello World");
    response.send("I am the server");
  });
