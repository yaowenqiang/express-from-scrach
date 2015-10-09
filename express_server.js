var express = require('express');
var app = express();
app.get('',function(req,res){
    res.send('hello world! how are you?');
})
app.listen(3000);
//useful modules:
//express,nodemon,mocha,grunt-js,gulp,bower,karma,yo,q
//browsenpm.org/package.json
//nodebeginner.org
//howtonode.org
//nodeschool.io
