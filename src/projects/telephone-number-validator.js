/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.

*/

function telephoneCheck(str) {
    let regexPhone = /1?[\s]?[(]?[\d]{3}[)]?[-]?[\s]?[\d]{3}[-]?[\s]?[\d]{4}/
    if (str.match(regexPhone)) {
        return true
    }
    return false
}

telephoneCheck("555-555-5555");
