function printPower(arrayOfAscendingNumbers){
    let sum = 0
    let index = 0;
    while (index < (arrayOfAscendingNumbers.length)){
        let pow = (Math.pow(arrayOfAscendingNumbers[index],2));
        sum = sum + pow
        index++
    }
    return sum
}
let array = [5,10,15,20,25,30,35,40,45,55,66,78]
console.log(`The sum of squres equals to ${printPower(array)}`);

function arrayCreate(firstNumber, increment, numberOfMembers){
    let index = 0;
    let anyArray = [0]
    while (index < numberOfMembers){
        anyArray[index] = firstNumber+index*increment;
        index++
    }
    return anyArray;
}

console.log(`The array of numbers is as follows:${arrayCreate(101, 1, 50)}`);
console.log(`The sum of squares equals to ${printPower(arrayCreate(101, 1, 50))}`)

