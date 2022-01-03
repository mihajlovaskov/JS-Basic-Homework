function findNumber(number, array){
    let count = 0
    for(i=0; i < array.length; i++){
        if(number == array[i]){
            count++
        }
    }
    console.log(`There is/are ${count} occurence/s of number ${number} in array ${array}`);
}
let numArray = [5,8,8,7,5,5,5];
findNumber(7, numArray);
findNumber(5,numArray);
findNumber(0,numArray);

let numArray2 = [1,2,4,9,3,7,28,4];
findNumber(5,numArray2);
findNumber(9,numArray2);
findNumber(4,numArray2);

let numArray3 = [9,9,9,8,8,8,7,7,7,6,6,6,5];
findNumber(9,numArray3);
findNumber(8,numArray3);
findNumber(5,numArray3);
findNumber(0,numArray3);