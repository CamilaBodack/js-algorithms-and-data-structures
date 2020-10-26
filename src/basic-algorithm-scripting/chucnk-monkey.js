/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let newArr = []
  for(let arrPosition = 0; arrPosition < arr.length; arrPosition += size){
    newArr.push(arr.slice(arrPosition, arrPosition+size))
  }
  return newArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
