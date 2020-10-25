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
