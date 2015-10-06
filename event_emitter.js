var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
ee.on('someEvent',function(data){
    console.log('someEvent:' , data);;
});
ee.emit('someEvent',{option:true});

ee.once('someEvent',function(data){
    console.log('someEvent:' , data);;
});
ee.emit('someEvent',{option:false});

function callback () {
    console.log('manual once');
    ee.removeListener('eventOne',callback);
}
ee.emit('eventOne',callback());

var util = require('util');
function UserList () {
    this.list = [];
    EventEmitter.call(this);
}

util.inherits(UserList,EventEmitter);;
UserList.prototype.add  = function (name){
    this.list.push(name);
    this.emit('new-user',name);
}
var list = new UserList();
list.on('new-user',function(name){
    console.log('hello,',+ name);
});
list.add("Shawon");
list.add("Gus");
