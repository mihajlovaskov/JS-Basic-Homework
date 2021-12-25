function calculateAge(byear, cyear){
    alert(`You are ${cyear-byear} years old`)
}
calculateAge(1982,2021);
calculateAge(1984,2021);
calculateAge(2010,2021);

function ageCalculator(byear){
    alert(`You are ${new Date().getFullYear()-byear} years old`) 
}
ageCalculator(2000);
ageCalculator(1944);
ageCalculator(1952);

//Solution 2, if trainers would like to see a "return" functionality embedded in the function
function age(byear){
    let myage = `You are ${new Date().getFullYear()-byear} years old`
    return myage;
}
let proba = age(1997);
alert(proba);
alert(age(+prompt("What year were you born?")));