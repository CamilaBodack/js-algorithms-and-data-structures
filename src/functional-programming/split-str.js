/*
The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.
*/

function splitify(str) {
  // Only change code below this line
  return str.split(/[\, \s \- \.]/)

  // Only change code above this line
}
splitify("Hello World,I-am code");
