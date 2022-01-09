let scriptElement = document.getElementsByTagName("script")
let hElement = document.createElement("h3");
scriptElement[0].before(hElement);
hElement.innerText = "receipeName";
let divElement = document.createElement("div");
divElement.setAttribute("class", "myDiv");
scriptElement[0].before(divElement);
let divElement2 = document.createElement("div");
divElement2.setAttribute("class", "myDiv");
scriptElement[0].before(divElement2);
let hElement2 = document.createElement("h3");
divElement2.appendChild(hElement2);
hElement2.innerText = "receipeName2";

//Unordered list
function receipe (receipeName, ingredients){
    let name = receipeName;
    hElement.innerText = name;
    divElement.innerHTML+=`Ingredients: <ul>`;
    for(i=0; i<ingredients.length; i++){
        divElement.innerHTML+=`<li>${ingredients[i]}</li></ul>`;
    }
}

let requiredIngredients = prompt("Enter comma-separated integrients:").split(",");
let nameOfReceipe = prompt("Enter name of receipe:");
receipe (nameOfReceipe, requiredIngredients);

//TABLE
function receipe2 (receipeName2, ingredients){ 
    let name = receipeName2;
    hElement2.innerText = name;
    let tableElement = document.createElement("table");
    tableElement.setAttribute("style", "border:1px solid black; width:15%;");
    divElement2.appendChild(tableElement);
    let trElement =[]
    for(i=0; i<ingredients.length; i++){
        trElement[i] = document.createElement("tr");
        tableElement.appendChild(trElement[i]);
        trElement[i].innerHTML=`<td style="border:1px solid black;text-align:center">${ingredients[i]}</td>`;
   }
    tableElement+= `${trElement.innerHTML}`;
}

let requiredIngredients2 = prompt("Enter comma-separated integrients:").split(",");
let nameOfReceipe2 = prompt("Enter name of receipe:");
receipe2 (nameOfReceipe2, requiredIngredients2);
   








