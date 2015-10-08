var http = require('http');
var server = http.createServer(function(request,response){
    response.write('<h1>Hello,Node</h1>');
    response.end();
});
server.listen(3000);
