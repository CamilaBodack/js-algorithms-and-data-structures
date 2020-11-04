/*

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

*/

function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++){
      if(!collection[i][pre]){
        return false
      }
  }
  return true
}

truthCheck([{"single": "double"}, {"single": NaN}], "single")
