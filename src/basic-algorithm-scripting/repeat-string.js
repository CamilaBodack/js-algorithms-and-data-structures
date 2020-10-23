/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
    let counter = 0;
    let add_str = []
    if (str.length === 0) {
        return ""
    } else {
        while (counter < num) {
            add_str.push(str)
            counter++
        }
        return add_str.join('')
    }
}

repeatStringNumTimes("abc", 3);
