var ws = require('stream').Writable();
var fib = require('./stream');
ws._write = function (chunk,encoding,next) {
    console.log(chunk.toString());
    //next();
    setTimeout(next, 10000);
}
fib.pipe(ws);
