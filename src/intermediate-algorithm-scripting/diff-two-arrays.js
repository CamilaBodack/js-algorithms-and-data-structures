/*
Compare two arrays and return a new array with any items only found in
one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  for(let arrPosition = 0; arrPosition < arr.length; arrPosition++){
    for(let argsPosition = 0; argsPosition < args.length; argsPosition++){
      if(arr[arrPosition] === args[argsPosition]){
          delete arr[arrPosition]
    }
   }
  }
 return arr.filter(Boolean)
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
