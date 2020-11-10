function checkCashRegister(price, cash, cid) {

let sumCid = Number(cid.map(coin => coin[1]).reduce((valueA, valueB) => valueA + valueB)).toFixed(1)
let sortCid = cid.sort((a, b) => a - b)
let movArr = []
let result = 0
let change = (cash - price)
let penny // ((0.01*100)*1.01*100)
let nickel  //Number(2.05/0.05).toFixed(1)
let dime //Number(3.1/0.1).toFixed(1)
let quarter //4.25/0.25)
let dollar //90/1
let five //55/5
let ten // 20/10
let twenty //60/20
let one_hundred // 100/100


// cash-in-drawer = change
if(change == sumCid){
  return {status: "CLOSED", change: sortCid.reverse()}
}

// cash-in-drawer < change
if(cash > sumCid){
  return  {status: "INSUFFICIENT_FUNDS", change: []}
  }

// change
result = change

one_hundred = (change - cid[0][1])

if(one_hundred > 0){movArr.push(cid[0][1], one_hundred), change = one_hundred}
twenty = (change - Number((change % cid[1][1])))
change = Number((change % cid[1][1]).toFixed(2))


if(twenty > 0){movArr.push(cid[1][0], twenty)}
ten = (change - Number((change % cid[2][1])))
change = Number((change % cid[2][1]).toFixed(2))


if(ten > 0){movArr.push(cid[2][0], ten)}
five = (change - Number(change % 5).toFixed(2))
change = Number((change % 5).toFixed(2))



if(five > 0){movArr.push(cid[3][0], five), result = five}
dollar = (result - cid[3][1])
console.log('--dollar',cid[4][0], cid[4][1])

console.log('five', five)
console.log('change', change.toFixed(2))







if(dollar > 0){movArr.push(cid[4][0], result), result = dollar}
quarter = (result - cid[5][1])
console.log('--quarter',cid[5][0], cid[5][1])
if(quarter > 0){movArr.push(cid[5][0], result), result = quarter}
dime = (result - cid[6][1])
console.log('--dime',cid[6][0], cid[6][1])
if(dime > 0){movArr.push(cid[6][0], result), result = dime}
nickel = (result - cid[7][1])
console.log('--nickel',cid[7][0], cid[7][1])
if(nickel > 0){movArr.push(cid[7][0], result), result = nickel}
penny = (result - cid[8][1])
console.log('--penny',cid[8][0], cid[8][1])
if(penny > 0){movArr.push(cid[8][0], result), result = penny}

//return console.log({status: "OPEN", change: [movArr]})

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
