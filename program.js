function odd(arr){
    return arr.filter(function(n){
        return n % 2;
    });
}
var numbers = [1,2,3,4,5,6];
var oddNums = odd(numbers);
console.log(oddNums);
