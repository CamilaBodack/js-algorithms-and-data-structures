function binaryAgent(str) {
  let splitStr = str.split(" ")
  let arrDec = []
  let newString = []

  for(let i = 0; i < splitStr.length; i++){
    arrDec.push(parseInt(splitStr[i], 2).toString(10))
    for(let j = 0; j < 1; j++){
      newString.push(String.fromCharCode(arrDec[i]))
    }
  }

 return newString.join("")
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
