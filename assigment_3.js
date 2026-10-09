const prompt = require("prompt-sync")();

// code start here
function checkNumber(arr, num){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num){
            return true
        } 
    }
    return false
}

console.log(checkNumber([1, 2, 3, 4, 5], 10))
console.log(checkNumber([1, 2, 3, 4, 5], 3))