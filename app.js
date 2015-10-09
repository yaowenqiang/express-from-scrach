var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('hello world! how are you? i am going to restart later!');
})
var port = process.env.port || 3000;
app.listen(port);