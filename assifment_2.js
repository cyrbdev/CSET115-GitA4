const prompt = require("prompt-sync")();

// The code start here
function removeDuplicate(arr){
    const dupli = new Set(arr)

    return Array.from(dupli)
}
console.log(removeDuplicate([`Christian`, `Mike`, `Mike`, `Juan`]))