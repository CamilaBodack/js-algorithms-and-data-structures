function checkCashRegister(price, cash, cid) {

 let sumCid = cid.map(pos => pos[1]).reduce((posA, posB) => posA + posB).toFixed(2)

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
