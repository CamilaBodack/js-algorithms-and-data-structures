function checkCashRegister(price, cash, cid) {

let sumCid = Number(cid.map(coin => coin[1]).reduce((valueA, valueB) => valueA + valueB)).toFixed(1)
let sortCid = cid.sort((a, b) => a + b)
let movArr = []
let result = 0
let change = (cash - price)


if(change == sumCid){
  return {status: "CLOSED", change: [...sortCid]}

}

if(cash > sumCid){
  return  {status: "INSUFFICIENT_FUNDS", change: []}
  }

let newCidArr = [...sortCid]
newCidArr[0].unshift(100)
newCidArr[1].unshift(20)
newCidArr[2].unshift(10)
newCidArr[3].unshift(5)
newCidArr[4].unshift(1)
newCidArr[5].unshift(.25)
newCidArr[6].unshift(.10)
newCidArr[7].unshift(.05)
newCidArr[8].unshift(.01)


for(let i = 0; i < newCidArr.length; i++){
  if(newCidArr[i][0] <= change){
    if(change % newCidArr[i][0] == 0){
      movArr.push(newCidArr[i][1], change)
      return {status: "OPEN", change: [movArr]}
    }
  }
}

}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
