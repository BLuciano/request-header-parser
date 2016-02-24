var express = require('express');
var app = express();

app.get('/', function(req, res) {
 
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("Chat server listening at port 3000");
});
