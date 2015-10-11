var express = require('express');
    bodyParser = require('body-parser');
    app = express();
app.use(bodyParser.urlencoded({extended:true}));
var names = [];
function log(req,res,next){
    console.log(names);
    next();
}
app.all('/',function(req,res,next){
    console.log('from ALL');
    next();
    //res.send('testingt all');
});
//app.get('/',function(req,res,next){console.log(names);next();},function(req,res){
app.get('/',log,function(req,res){
    //res.send('hello world! how are you?');
    res.render('index.jade',{ names:names });
})
app.get('/jade',log,function(req,res){
    //res.send('hello world! how are you?');
    res.render('jade.jade',{ title:"hello,this is from jade" });
})
app.get('/ejs',log,function(req,res){
    //res.send('hello world! how are you?');
    res.render('index.ejs',{ title:"hello,this is from ejs" });
})
app.post('/',function(req,res){
    names.push(req.body.name);;
    res.redirect('/');
})
app.listen(3000);
//useful modules:
//express,nodemon,mocha,grunt-js,gulp,bower,karma,yo,q
//browsenpm.org/package.json
//nodebeginner.org
//howtonode.org
//nodeschool.io
