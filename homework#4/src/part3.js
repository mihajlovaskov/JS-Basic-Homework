function createText(arrayOfStrings){
    let index = 0;
    let sum = ""; //empty string, so as not to have any starting value when calculating the sum below 
    while (arrayOfStrings.length > index){
        let strings = arrayOfStrings[index];
        sum = sum + strings + " "; //I am adding empty space, so as to have empty spaces between
        // individual strings that are assembling in the new big string
        index++;
    }
    return sum;
}
let arrayText = ["Hello", "there", "students", "of", "SEDC", "!"];
let bigString = createText(arrayText);
console.log(bigString);
console.log(typeof(bigString));//string
