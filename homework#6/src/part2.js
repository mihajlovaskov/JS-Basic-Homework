let scriptElement = document.getElementsByTagName("script")
console.log(scriptElement);
let hElement = document.createElement("h3");
scriptElement[0].before(hElement);
hElement.innerText = "Weight calculator in number of chickens";
let pElement = document.createElement("p");
scriptElement[0].before(pElement);

function weightInChickens (humanWeight){
    let chicken = humanWeight*2;
    return chicken;
}
let weight = +prompt("Please enter your weight in kg:")
pElement.innerText=`The weight in number of chickens equals ${weightInChickens(weight)}`;
