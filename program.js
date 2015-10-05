function odd(arr){
    return arr.filter(function(n){
        return n % 2;
    });
}
var numbers = [1,2,3,4,5,6];
var oddNums = odd(numbers);
//console.log(oddNums);

function oddSync(arr){
    return arr.filter(function(n){
        return n % 2;
    });
}
var numbers = [1,2,3,4,5,6];
var oddNums = odd(numbers);
//console.log(oddNums);

/*
 * ASYNCRONOUS  CODE
  */
function oddsAsync(arr,callback){
    var oddNums =  arr.filter(function(n){ return n % 2; });
    var err = arr.indexOf(3)  == -1 ? new Error('No 3s allowed'):null;
    setTimeout(function(){
        callback(err,oddNums);
    },1000);
}
var numbers = [1,2,3,4,5,6,7,8,9];
oddsAsync(numbers,function(err,data){
    if(err){
        throw err;
    }
    console.log("data:"+data);
});
console.log('this comes after the add() call');
