var util = require('util');
var log = util.debuglog('fulcrum');
var log2 = util.debuglog('foobar');
log('this is a message');
log2('this is log2');
// NODE_DEBUG=fulcrum node util.js
// NODE_DEBUG=foobar node util.js
// NODE_DEBUG=foobar,fulcrum node util.js


var person = {
    name:'Andre',
    interests: ['javascript','books']
};
console.log(util.format('%s : %j',person,person));

console.log(util.inspect(person));
console.log(util.inspect(util,{colors:true}));


function User () {
}

User.prototype.loggedIn = function () {
    return true;
}

function Admin () {

}

util.inherits(Admin,User);
// Admin.prototype.prototype = User.prototype

admin = new Admin();
console.log(admin.loggedIn());
