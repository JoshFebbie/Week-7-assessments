//This function should run O(n).//
function pangram(string) {
    const splStr = string.toLowerCase().split("")
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

    for (const letter of splStr)
        for (let i = 0; i < alphabet.length; i++)
            if (letter === alphabet[i]) alphabet[i] = "";

    alphabet = alphabet.filter(value => value !== "")

    return !alphabet.length? true: false
}

console.log(pangram("The quick brown fox jumps over the lazy dog."))
console.log(pangram("Too cool for school."))
console.log(pangram("When zombies arrive quickly fax judge pat"))
console.log(pangram("Scooby doo on channel two."))