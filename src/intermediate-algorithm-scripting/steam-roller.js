/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  return (function flatDeepArr(arr){
   return arr.reduce((count, val) => Array.isArray(val) ? count.concat(flatDeepArr(val)) : count.concat(val), [])
})(arr)
}

steamrollArray([1, [2], [3, [[4]]]]);
