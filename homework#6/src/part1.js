let scriptElement = document.getElementsByTagName("script")
let divElement = document.createElement("div");
divElement.setAttribute("class", "myDiv");
scriptElement[0].before(divElement);

function summing(arrayOfNumbers){
let sum=0;
    divElement.innerHTML+=`The list of numbers is: <ul>`;
    for(i=0; i<arrayOfNumbers.length; i++){
        divElement.innerHTML+=`<li>${arrayOfNumbers[i]}</li></ul>`;
        sum+=arrayOfNumbers[i];
    }
    return sum;
}

function equation (arrayOfNumbers){
    let arrayOfOperators = ["="];
    let eqArr = [];
    let eq="";
    for (i=0; i < arrayOfNumbers.length-1; i++){
        arrayOfOperators.unshift("+")[i];
    }
    for (i=0; i < arrayOfNumbers.length;i++){
        eqArr[i]=`${arrayOfNumbers[i]}${arrayOfOperators[i]}`;
        eq=eq+eqArr[i];
    }
    return eq;
}

let array = [2,4,5,8,28];
let sumOfNumbers = summing(array);
let expression = equation(array);
divElement.innerHTML+=`The sum of numbers is: ${sumOfNumbers}</br>`
divElement.innerHTML+=`The equation is as follows: ${expression}${sumOfNumbers}`;

