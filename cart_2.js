function Cart(){
    this.item = [];
}
Cart.prototype.addItem = function(name,price){
    this.item.push({
        name:name,
        price:price
    });
}
Cart.prototype.total = function(){
    return this.item.reduce(function(a,b){
        return a + b.price;
    },0);
};
module.exports = Cart;
