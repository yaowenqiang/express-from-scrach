var APIv2 = require('express').Router();
APIv2.get('/names',function(req,res){
    res.send('first from API 2');
});
module.exports = APIv2;
