var APIv1 = require('express').Router();
APIv1.get('/names',function(req,res){
    res.send('first from API 1');
});
module.exports = APIv1;
