/*

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/


function myReplace(str, before, after) {
  let toUpper
  let firstLetter
  let toLower

  if(before[0] === before[0].toUpperCase()){
    after = after.split("")
    firstLetter = after.shift()
    toUpper = firstLetter.toUpperCase().concat(after.join(""))
    return str.replaceAll(before, toUpper)
  }
  else{
    after = after.split("")
    firstLetter = after.shift()
    toLower = firstLetter.toLowerCase().concat(after.join(""))
    return str.replaceAll(before, toLower)
  }
}

myReplace("I think we should look up there", "up", "Down")
