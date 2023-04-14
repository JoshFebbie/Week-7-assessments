//I believe this function has a O(n) runtime.//
function findLongestWord(string) {
    let str = string.split(" ")
    let longest = 0
    let word = null

    str.forEach(function(str) {
        if (longest < str.length) {
        longest = str.length
        word = str
        }
    })
    return word
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord("Ah man, I have pneumonoultramicroscopicsilicovolcanoconiosis. No beuno!"))
console.log(findLongestWord("I am a very long string of words that will be split into an array, and then I will be compared to see which word is the longest."))