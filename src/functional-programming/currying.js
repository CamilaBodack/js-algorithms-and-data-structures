/*
Fill in the body of the add function so it uses currying to add parameters x, y, and z.
*/

function add(x) {
    // Only change code below this line
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
    // Only change code above this line
}
add(10)(20)(30);
