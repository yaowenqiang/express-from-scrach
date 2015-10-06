var item = [];
function addItem(name,price){
    item.push( {
        name:name,
        price:price
    } );
}

// exports.total = function (){
function total(){
    return item.reduce(function(a,b){
        return a + b.price;
    },0);
}
exports.addItem = addItem;
exports.total = total;
