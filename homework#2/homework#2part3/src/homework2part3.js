let num1 = parseFloat(prompt("Enter number 1:"));
let num2 = parseFloat(prompt("Enter number 2:"));
let num3 = parseFloat(prompt("Enter number 3:"));
let num4 = parseFloat(prompt("Enter number 4:"));
let num5 = parseFloat(prompt("Enter number 5:"));
if(num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5){
    alert(`The maximum number is ${num1}`);
}
else if(num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5){
    alert(`The maximum number is ${num2}`);
}
else if(num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5){
    alert(`The maximum number is ${num3}`);
}
else if(num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5){
    alert(`The maximum number is ${num4}`);
}
else if(num5 >= num1 && num5 >= num2 && num5 >= num3 && num5 >= num4){
    alert(`The maximum number is ${num5}`);
}