function max(arrayNumbers){
    let index = 0;
    let max = -Infinity;
    while(index < arrayNumbers.length){
        if(!isNaN(parseFloat(arrayNumbers[index])) && parseFloat(arrayNumbers[index]) > max){//sakam sekogas da
            //mi gi zema predvid cistite broevi i broevite vo stringovite (pr. "5"). se drugo ne sakam da mi 
            //zema predvid pri presmetkite na max i min
            max = parseFloat(arrayNumbers[index]);
        }
        index++;
    }
    return max;
}
function min(arrayNumbers){
    let index = 0;
    let min = +Infinity;
    while(index < arrayNumbers.length){
        if(!isNaN(parseFloat(arrayNumbers[index])) && parseFloat(arrayNumbers[index]) < min){ //sakam sekogas da
            //mi gi zema predvid cistite broevi i broevite vo stringovite (pr. "5"). se drugo ne sakam da mi 
            //zema predvid pri presmetkite na max i min
            min = parseFloat(arrayNumbers[index]);
        }
        index++;
    }
    return min;
}
let test = ["3", 5, 6, 8, "11", true, "orange", null];
let sum = max(test) + min(test);
console.log(`The sum of max:${max(test)} and min:${min(test)} equals: ${sum}`);//expected= 3+11=14
