function findNumber(number, array){
    let found = false;
    for(let listNumbers of array){
        if(listNumbers == number){
            found = true;
        }
    }
   if(found == true){
       console.log(`You have ${number} in the array: [${array}]`);
       let counts = []
       for (let number of array) {
        counts[number] = (counts[number] || 0) + 1;
    }
    console.log(`There is/are ${counts[number]} occurence/s of number ${number} in the array: [${array}]`);
   }
   else{
    console.log(`You don't have ${number} in the array: [${array}]`);
   }
}
let numArray = [5,8,9,7,5,5,5];
findNumber(5,numArray);
findNumber(9,numArray);
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