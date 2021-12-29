let array = [5,2,3,4,8];
function sumOfNumbers(arrayOfNumbers){
    let sum = 0;
    let index = 0;
    while(index < arrayOfNumbers.length){
        let numbers = arrayOfNumbers[index];
        sum = numbers + sum;
        index++
    }
    return sum
}
console.log(`The sum of numbers is ${sumOfNumbers(array)}`);

function sumOfValidNumbers(arrayOfValidNumbers){
    let index = 0;
    let sum = 0;
    while (arrayOfValidNumbers.length > index){ 
        let numbers = arrayOfValidNumbers[index];
        if (isNaN(parseFloat(numbers))){ // kako validni broevi za presmetka na zbir gi smetam cistite broevi
            // i broevite sodrzani vo string (pr. "5"). se ostanato sakam da go smeta za nevaliden broj
            console.log("Some member(s) in the array is/are not numbers");
        }
        else {
            sum = sum + parseFloat(numbers);
        }
        index++
    }
    return sum
}
let newArray = ["5","2","3","4","8", true, "orange", null, " ", 1];
console.log(`The sum of the members that are numbers in the array is ${sumOfValidNumbers(newArray)}`);