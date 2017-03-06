var express=require('express');
var app=express();

var animals=require("./animals");

app.use(express.static(__dirname + '/public'));

app.get("/animals", function(req, res){
  res.send(animals);
});

var server = app.listen(3000, function(){
  var port=server.address().port;
  console.log("example app listening at http://localhost:%s", port);
});
