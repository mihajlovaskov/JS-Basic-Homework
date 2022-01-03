function findNumber(array,type){
    for (i=0; i < array.length; i++){
        if(type.toLowerCase()=="even" && !isNaN(parseFloat(array[i])) && parseFloat(array[i]) %2 == 0){
            let even = array.filter(number => number %2 == 0);
            return even;
        }
        else if (type.toLowerCase()=="odd" && !isNaN(parseFloat(array[i])) && parseFloat(array[i]) %2 !== 0){
            let odd = array.filter(number => number %2 !== 0);
            return odd;
        }
    }
}
let array1 = prompt("Enter comma-separated numbers :").split(",");
let type1 = prompt("Enter type of numbers (odd/even):");
alert(`The ${type1} numbers in array: ${array1} are as follows: ${findNumber(array1,type1)}`);