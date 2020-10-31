/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {

  let removeSpecial = str.replaceAll(/[\_]/g, '')
  let addHifen = removeSpecial.replaceAll(" ", "-")
  let splitStr = addHifen.split("")
  let charArr = ""

  for(let i = 0; i < splitStr.length; i++){
    if(splitStr[i].match(/[A-Z]/) && i >0){
      charArr+="-"
      charArr+=splitStr[i]
    }else{
      charArr+=splitStr[i]}
  }


  let finalChar = charArr.replaceAll("--", "-")
  let strLower = finalChar.toLowerCase()
  return strLower

}

spinalCase("Teletubbies say Eh-oh")
spinalCase('This Is Spinal Tap');
spinalCase("TheAndyGriffith_Show")
