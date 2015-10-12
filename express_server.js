var express = require('express');
    bodyParser = require('body-parser');
    app = express();
    app.set('env','development');// process.env.node_env,default ,undefined
    app.enable('trust proxy');
    app.set('jsonp callback name','callback');// callback is the default
    app.set('json replacer',function(attr,val){
        if(attr === 'passwordhash') {
            return undefined;
        }
        return val.toUpperCase();
    });

    app.enable('case sensitive routing'); // /hello  /Helllo
    app.enable('strict routing');// this will treat path with / and without / the same thing,i.e,/user/ == /user
    app.enable('view cache');

    app.set('view engine','jade');//if set view engine ,the render method doesn't need  to set the file extension,i.e,res.render('index);,
    //app.set('views','templates');// view folder name
    app.set('x-powered-by');// enabled default

    //JSON.stringify({},fn);

    //app.set();
    //app.enable();
    //app.disable();
    //app.get();
    //app.enabled();
    //app.disabled();
app.use(bodyParser.urlencoded({extended:true}));
// custom middle
app.use(function(req,res,next){
    console.log('this will log all req and res');
    next();
});

//TODO
//build-8in middleware
//app.use(express.static('./public'));

//middleware
//https://github.com/senchalabs/connect/
var names = [];
function log(req,res,next){
    console.log(names);
    next();
}

app.param('name',function(req,res,next,name){
    //req.name = name[0].toUpperCase() + name.substring(1);
    req.params.name = name.toUpperCase();
    next();
})
app.get('/name/:name',function(req,res){
   res.send('Your name is ' + req.params.name);
});
app.all('/',function(req,res,next){
    console.log('from ALL');
    next();
    //res.send('testingt all');
});
//app.route()
    //.get()
    //.post()
    //.delete()
    //.put()
    //.all()
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
//var router = express.Router(function(){
    //caseSensitive:false,
    //strict:true
//});

// router.user();
// router.get();
// router.route();
var APIv1 = require('./APIv1'),
    APIv2 = require('./APIv2');
app.use('/api/v1',APIv1);
app.use('/api/v2',APIv2);
app.listen(3000);
// app.user('/',router);
//useful modules:
//express,nodemon,mocha,grunt-js,gulp,bower,karma,yo,q
//browsenpm.org/package.json
//nodebeginner.org
//howtonode.org
//nodeschool.io
