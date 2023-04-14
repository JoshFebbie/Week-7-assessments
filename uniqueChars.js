//This function should run 0(n^2)
function uniqueChars(str) {
    let uniqueChars = new Set([])

        for (let i = 0; i < str.length; i++) {
            uniqueChars.add(str[i])
    }
    return uniqueChars.size === str.length
}
console.log(uniqueChars("boy"))
console.log(uniqueChars("bob"))
console.log(uniqueChars("josh"))
console.log(uniqueChars("bobby"))
console.log(uniqueChars("Scooby-doo"))
console.log(uniqueChars("We"))

// Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).