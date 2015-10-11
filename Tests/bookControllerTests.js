var should = require('should'),
    sinon = require('sinon');
describe('Book Controller Tests: ',function () {
    describe('Post:',function(){
        it('should not allow an empty title on post',function(){
            var book = function (book) {
                this.save = function(){};
            };
            var req = {
                body: {
                    author: 'me',
                }
            }
        });
    });
});

