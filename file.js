var fs = require('fs');
//fs.readFile('file.js',function(err,data){
    //console.log(data.toString());
//})


//fs.writeFile('text.txt','this is the data',function(err,data){
    //if (err) {
        //throw err;
    //}
    //console.log(fs.readFileSync('text.txt').toString());
//})


//var readStream = fs.createReadStream('file.js');
//readStream.pipe(process.stdout);


var writeStream = fs.createWriteStream('fib.txt');
var fib = require('./stream');
fib.pipe(writeStream);

