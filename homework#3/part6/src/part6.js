let account = 100000;// harcoding the amount of account money
function atm(x){ //x is the amount that one wants to withdraw from the ATM
    if((account-x)<0){
        alert("Not enough money");
    }
    else{
        alert(`Amount withdrawn: ${x}; Money left: ${account-x}`);
    }
}
atm(+prompt("How much money would you like to withdraw?"));

//Solution 2, if trainers would like to see a "return" functionality embedded in the function

let money = 1000;
function deposit(x){ //x is the amount that one wants to withdraw from the ATM
    if((money-x)<0){
        let broke = "Not enough money";
        return broke;
    }
    else{
        let positive = `Money left: ${money-x}; Money withdrawn: ${x}`;
        return positive; 
    }
}
let proba = deposit(500);
console.log(proba);
let proba1 = deposit(1200);
console.log(proba1);
let proba2 = deposit(+prompt("How much money would you like to withdraw?"));
alert(proba2);
alert(deposit(+prompt("How much money would you like to withdraw?")));//test no.4
