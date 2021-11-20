/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  for(let position = 0; position < arr.length; position ++){
    if(Boolean(arr[position]) !== true){
      arr.splice(position, 1)
      position--
    }
  }
  return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);
