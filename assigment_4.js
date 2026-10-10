const prompt = require("prompt-sync")();

// The code starts here
function numObj(arr){
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let letter = String.fromCharCode(num)

        let map = new Map()
        map.set(num.toString(), letter)

        let obj = Object.fromEntries(map)
        result.push(obj)
    }

    return result
}

console.log(numObj([118, 117, 120]))