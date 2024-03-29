var express = require('express');
var routes = function (Book) {
var bookController = require('../Controllers/bookController')(Book);
    var bookRouter = express.Router();
    bookRouter.use('/books/:bookId',function(req,res,next){
        Book.findById(req.params.bookId, function (err, book) {
            if (err) {
                res.status(500).send(err);
            } else if (book) {
                req.book = book;
                next();
            } else {
                res.status(404).send('no book founded');

            }
        });

    });
    bookRouter.route('/books')
        .post(bookController.post)
        .get(bookController.get);
    bookRouter.route('/books/:bookId')
        .get(function (req, res) {
            res.json(req.book);
        })
        .patch(function(req,res){
            if(req.body._id){
                delete req.body._id;
            }
            for(p in req.body){
                req.book[p] = req.body[p];
            }
            req.book.save(function(err){
                if(err){
                    res.status(500).send(err);
                } else {
                     res.json(req.book);
                }
            });
        })
        .delete(function(req,res){
            req.book.remove(function(err){
                if(err){
                    res.status(500).send(err);
                } else {
                     res.status(204).send('removed');
                }
            });
        })
        .put(function(req,res){
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            req.book.save(function(err){
                if(err){
                    res.status(500).send(err);
                } else {
                     res.json(req.book);
                }
            });
        });
    return bookRouter;
}
module.exports = routes;
