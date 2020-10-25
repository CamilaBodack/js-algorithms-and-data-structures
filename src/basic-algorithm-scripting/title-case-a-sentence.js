/*Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/

function titleCase(str) {
    let splitArr = str.split(" ")
    let eachWord = []
    let newStr = []
    for (let i = 0; i < splitArr.length; i++) {
        eachWord = splitArr[i]
        newStr.push(" ")
        newStr.push(eachWord[0].toUpperCase())
        for (let j = 1; j < eachWord.length; j++) {
            newStr.push(eachWord[j].toLowerCase())
        }
    }
    return newStr.join('').trim()
}

titleCase("I'm a little tea pot");
