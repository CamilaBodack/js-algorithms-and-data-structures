/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    let newArr = [...str]
    let counter = 0
    let noVowel = newArr.every(letter => (!letter.match(/[aeiou]/)))

    if (noVowel) {
        newArr.push("ay")
        return newArr.join("")
    }

    if (str[0].match(/[aeiou]/)) {
        newArr.push("way")
        return newArr.join("")
    }

    while (!str[counter].match(/[aeiou]/) && counter < newArr.length) {
        newArr.shift()
        newArr.push(str[counter])
        counter++
    }
    newArr.push("ay")
    return newArr.join("")
}

translatePigLatin("rhythm")
