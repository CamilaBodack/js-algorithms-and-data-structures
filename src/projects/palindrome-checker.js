/* Challenge #1: Project Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

*/

function palindrome(str) {
    let removeAlpha = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let reverseStr = removeAlpha.split("").reverse().join("")
    return reverseStr === removeAlpha
}

palindrome("_eye")
