/*
Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/


function convertToRoman(num) {
let tenMod = num % 10
let fiveMod = num % 5
let dec = (num - tenMod)/10
let fiftyMod = num % 50 // <= 50
let centMod = num/100 // >= 1 pra validar
let fivMod = num % 500 // <= 500
let milMod = num/1000 // >=  1 pra validar
let romanArr = []

let romanNumber = [
    {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
    }
    ]

console.log('---', tenMod)
for(let i = 0; i < romanNumber.length; i++){
    romanArr.push(romanNumber[i][1]*tenMod)
}

console.log(romanArr)
}

convertToRoman(2014);
