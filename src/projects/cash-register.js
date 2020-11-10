/*
Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {

let sumCid = Number(cid.map(coin => coin[1]).reduce((valueA, valueB) => valueA + valueB)).toFixed(1)
let sortCid = cid.sort((a, b) => a - b)
let movArr = []
let change = (cash - price)
let penny
let nickel
let dime
let quarter
let dollar
let five
let ten
let twenty
let one_hundred
let arr = []


// cash-in-drawer = change

if(change == sumCid){
  return {status: "CLOSED", change: sortCid.reverse()}
}

// cash-in-drawer < change

if(cash > sumCid){
  return  {status: "INSUFFICIENT_FUNDS", change: []}
  }

// change

one_hundred = (change - cid[0][1])
if(one_hundred > 0){movArr.push([cid[0][1], one_hundred]), change = one_hundred}

twenty = (change - Number((change % cid[1][1])))
change = Number((change % cid[1][1]).toFixed(2))
if(twenty > 0){movArr.push([cid[1][0], twenty])}

ten = (change - Number((change % cid[2][1])))
change = Number((change % cid[2][1]).toFixed(2))
if(ten > 0){movArr.push([cid[2][0], ten])}

five = (change - Number(change % 5))
change = Number((change % 5).toFixed(2))
if(five > 0){movArr.push([cid[3][0], five])}

dollar = (change - Number(change % 1))
change = Number((change % 1).toFixed(2))
if(dollar > 0){movArr.push([cid[4][0], dollar])}

quarter = (change - Number(change % 0.25))
change = Number((change % 0.25).toFixed(2))
if(quarter > 0){movArr.push([cid[5][0], quarter])}

dime = (change - Number(change % 0.1))
change = Number((change % 0.1).toFixed(2))
if(dime > 0){movArr.push([cid[6][0], dime])}

nickel = (change - Number(change % 0.05))
change = Number((change % 0.05).toFixed(2))
if(nickel > 0){movArr.push([cid[7][0], nickel])}

penny = (change - Number(change % 0.01))
change = Number((change % 0.01).toFixed(2))
if(penny > 0){movArr.push([cid[8][0], penny])}

let finalArr = movArr.map(item => arr.push(item))

return {status: "OPEN", change: arr}

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
