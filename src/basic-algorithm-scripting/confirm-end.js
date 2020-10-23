/* Basic Algorithm Scripting: Confirm the Ending
  -----------------------------------------------
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/


function confirmEnding(str, target) {
  let length_menos_target = (str.length - target.length)
  let slice = str.slice(length_menos_target, str.length)
  return slice === target
}

confirmEnding("Open sesame", "same");
