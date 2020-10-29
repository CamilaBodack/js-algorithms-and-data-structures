/*
Compare two arrays and return a new array with any items only found in
one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {

 let arrDiff = arr1.filter(arrPosition => !arr2.includes(arrPosition)).concat(arr2.filter(arrPosition => !arr1.includes(arrPosition)))

return arrDiff
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
