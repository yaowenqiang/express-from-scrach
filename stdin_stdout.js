process.stdin.setEncoding('utf8');
process.stdin.on('data',function(chunk){
    process.stdout.write('chunk:' + chunk.toString());
})
process.stdin.on('end',function(){
    process.stdout.write('end');
})
//Usage:  echo 'aaaa' | node stdin_stdout.js
