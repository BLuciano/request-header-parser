var express = require('express');
var app = express();
var ip, lang, os;

app.get('/', function(req, res) {
  var headerData = req.headers;
  console.log(headerData);
  ip = headerData['x-forwarded-for'];
  lang = headerData['accept-language'];
  lang = lang.split(",")[0];
  os = headerData['user-agent'];
  os = os.split("(");
  os = os[1].split(")")[0];

  res.send({
    "ipaddress": ip,
    "language": lang,
    "software": os
  });
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("Chat server listening at port 3000");
});
