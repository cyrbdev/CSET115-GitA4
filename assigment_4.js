const prompt = require("prompt-sync")();

// The code starts here 
function numObj(arr){
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let letter = String.fromCharCode(arr[i])
        let obj = {}

        console.log(letter)
    }

    return result
}
console.log(numObj([118, 117, 120]))