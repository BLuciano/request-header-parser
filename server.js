var express = require('express');
var app = express();
var ip, lang, os;

app.get('/', function(req, res) {
  var headerData = req.headers;
  ip = headerData['x-forwarded-for'];
  lang = headerData['accept-language'];
  os = headerData['user-agent'];

  res.send({
    "ipaddress": ip,
    "language": lang,
    "software": os
  });
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("Chat server listening at port 3000");
});
