//creating HTML elements with DOM
let divE = document.createElement("div");
divE.setAttribute("style", "text-align: center;");
let scriptElement = document.getElementsByTagName("script");
scriptElement[0].before(divE);
let h1 = document.createElement("h1");
divE.appendChild(h1);
h1.innerText = "Zoo Form";
let divEl = document.createElement("div");
divE.appendChild(divEl);
divEl.setAttribute("id","zooForm");
divEl.innerHTML ='Name: <input type="text">Type: <input type="text">Age: <input type="text"><button>Add</button>';
let divEle = document.createElement("div");
divE.appendChild(divEle);
divEle.setAttribute("id","result1");
divEle.innerHTML ='<h3>Animals:</h3><ul style="list-style-position: inside"></ul>';

//Creating the Animal objects within the DOM created HTML elements
//First part of the homework - creating Animal objects by using a Constructor function
function Animals(name, type, age){
    this.animalName = name;
    this.animalType = type;
    this.animalAge = age;
}
let dogs = new Animals("Butch", "dog", 5);
let cats = new Animals("Kitty", "cat", 3);
let fish = new Animals("Freddy", "fish", 1);
//Second part of the homework - creating a form where the user will be able to input the values for each property and thus
//he/she can create as many Animal objects as he/she needs/wants; Each animal object is saved as an array and
//it is printed as a separate line in <ul>
let animals = []; //array of Animal objects, each consisted of 3 properties
function showAnimals(animalsArr, element){ //function for printing of each Animal object and its corresponding properties
  element.innerHTML = "";
  for (let animals of animalsArr) { //each animal object is printed as a separate line in <ul>
    element.innerHTML += `<li><i>Name:</i> ${animals.animalName},
    <i>Type:</i> ${animals.animalType}, 
    <i>Age:</i> ${animals.animalAge}</li>`;
  }
}
divEl.children[3].addEventListener("click", function(){ //divEl.children[3] -> it is the button element
  let name = divEl.children[0].value; //the first 3 children of divEl [0], [1] and [2] are the input elements where the user prompts the value for each animal object property 
  let type = divEl.children[1].value;
  let age = divEl.children[2].value;
  let newAnimal = new Animals(name, type, age);
  animals.push(newAnimal); //each new animal object with its corresponding properties is pushed as a last element of the array
  showAnimals(animals, divEle.children[1]); //divEle.children[1] -> <ul> element where each line relates to particular animal object
  divEl.children[0].value = ""; //when the values from the input elements are added in the animals array, 
  //by clicking on the add buttom, the input elements should be made empty, so that the user can start creating 
  //a new animal object
  divEl.children[1].value = "";
  divEl.children[2].value = "";
});