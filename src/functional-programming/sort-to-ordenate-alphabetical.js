/*
Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
*/

function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort((a, b) => a.localeCompare(b))

  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
