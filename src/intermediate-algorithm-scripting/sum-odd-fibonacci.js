function sumFibs(num) {

if(num <= 0){return num}

let arrFibonacci = [1, 1]
let nextNumber = 0

while((nextNumber = arrFibonacci[0] + arrFibonacci[1]) <= num){
   arrFibonacci.unshift(nextNumber)
  }

let sumOdd = arrFibonacci.filter(fib => fib % 2 !== 0).reduce((x, y) => x + y)

console.log(sumOdd)
return sumOdd

}

sumFibs(75025)
sumFibs(4);
