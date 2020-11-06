function rot13(str) {

let rot13Split = str.split("")
let letterIndex
let rot13
let toDecoded = []
let decoded = []
const chars = [" ", "!", ",", ".", "?"]

const alphabet =
[
"A","B","C","D","E","F","G","H","I","J","K", "L","M","N","O","P","Q","R",'S',"T","U","V","W","X","Y","Z"
]

for(let i = 0; i < rot13Split.length; i++){
  if(chars.includes(rot13Split[i])){
    toDecoded.push(rot13Split[i])
    continue
  }
  letterIndex = alphabet.indexOf(rot13Split[i])
  rot13 = (letterIndex + 13) % 26
  toDecoded.push(rot13)
}

for(let j = 0; j < toDecoded.length; j++){
  if(chars.includes(toDecoded[j])){
    decoded.push(toDecoded[j])
    continue
  }
      decoded.push(alphabet[toDecoded[j]])
}

return decoded.join("")

}

rot13("SERR CVMMN!")
rot13("SERR PBQR PNZC");
