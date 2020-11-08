function checkCashRegister(price, cash, cid) {

let sumCid = cid.map(coin => coin[1]).reduce((valueA, valueB) => valueA + valueB).toFixed(2)

if(cash > sumCid){
  return  {status: "INSUFFICIENT_FUNDS", change: []}
  }
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
