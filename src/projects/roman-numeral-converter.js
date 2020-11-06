/*
Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/


function convertToRoman(num) {

    const unidade = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const dezena = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const centena = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const milhar = ["", "M", "MM", "MMM"]

    let u = num % 10
    let d = (num % 100 - u) / 10
    let c = parseInt(((num % 1000) / 100))
    let m = parseInt(((num / 1000) - c / 10))

    return milhar[m] + centena[c] + dezena[d] + unidade[u]
}

convertToRoman(563);
