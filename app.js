var express = require('express');
var app = express();

var bookRouter = express.Router();


bookRouter.route('/books')
    .get(function (req, res) {
        var responseJson = {
            hello: "This is my API"
        };
        res.json(responseJson);
    });

app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('hello world! how are you? i am going to restart later!');
})
var port = process.env.port || 3000;
app.listen(port);