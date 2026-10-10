const prompt = require("prompt-sync")();

// The code starts here

function removeEven(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] % 2 === 0){
            arr.splice(i,1)
        }
    }
    return arr
}
console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));