/*

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {
    let newArr = []
    let sortArr = arr.sort((a, b) => a - b)
    let position = sortArr[0] + 1
    let maxArrValue = Math.max(...arr)
    let finalArrReducer = (counter, arrayPosition) => counter + arrayPosition

    while (position < maxArrValue) {
        newArr.push(position)
        position++
    }

    let finalArr = arr.concat(newArr).sort((a, b) => a - b)
    console.log(finalArr.reduce(finalArrReducer))
    return finalArr.reduce(finalArrReducer)
}

sumAll([4, 1]);
sumAll([10, 5])
