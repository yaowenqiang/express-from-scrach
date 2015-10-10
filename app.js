var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://192.168.1.107:27017/bookapi/');
var Book = require('./models/bookModel');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var bookRouter = express.Router();



bookRouter.route('/books')
    .post(function(req,res){{
        var book = new Book(req.body);
        //console.log(book);
        book.save();
        //res.send(book);
        res.status(201).send(book);
    }})
    .get(function (req, res) {
        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function (err, books) {
            if (err) {
                //                console.log(err);
                res.status(500).send(err);
            } else {
                res.json(books);
            }
        });
        /*
            var responseJson = {
                hello: "This is my API"
            };
            res.json(responseJson);
            */
    });
bookRouter.route('/books/:bookId')
    .get(function (req, res) {
        Book.findById(req.params.bookId, function (err, book) {
            if (err) {
                //                console.log(err);
                res.status(500).send(err);
            } else {
                res.json(book);
            }
        });
    });
app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('hello world! how are you? i am going to restart later!');
})
var port = process.env.port || 3000;
app.listen(port);
