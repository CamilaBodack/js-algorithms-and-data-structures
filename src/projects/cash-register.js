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

for(let i = 0; i < cid.length; i++){
     let one_hundred = (change - cid[i][1])
     if(one_hundred < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = one_hundred}
     let twenty = (change - cid[i][1])
     if(twenty < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = twenty}
     let ten = (change - cid[i][1])
     if(ten < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = ten}
     let five = (change - cid[i][1])
     if(five < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = five}
     let dollar = (change - cid[i][1])
     if(dollar < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = dollar}
     let quarter = (change - cid[i][1])
     if(quarter < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = quarter}
     let dime = (change - cid[i][1])
     if(dime < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = dime}
     let nickel = (change - cid[i][1])
     if(nickel < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = nickel}
     let penny = (change - cid[i][1])
     if(penny < 0){continue}
     else{movArr.push(cid[i][0], cid[i][1], change), result = penny}
}

return {status: "OPEN", change: [movArr]}
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
