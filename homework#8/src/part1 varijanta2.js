//first part of homework
function Animals(nameA, typeA, ageA){
    this.animalName = nameA;
    this.animalType = typeA;
    this.animalAge = ageA;
}
let dogs = new Animals("Butch", "dog", 5);
let cats = new Animals("Kitty", "cat", 3);
let fish = new Animals("Freddy", "fish", 1);
//second part of homework - creating form where user will input the properties of the animal and they appear as <ul>
let animals = [];
function showAnimals(animalsArr, element){
  let elem = $(element.html(""));
  for (let animals of animalsArr) {
    elem.html(elem.html() +`<li><i>Name:</i> ${animals.animalName},
    <i>Type:</i> ${animals.animalType}, 
    <i>Age:</i> ${animals.animalAge}</li>`);
  }
};
let myButton = $("button").first();
let myInput = $("input").first();
let myInput2 = $(myInput.next());
let myInput3 = $(myInput2.next());
let myUl = $("ul").first();
myButton.on("click", function(){ 
  let nameA = myInput.val(); 
  let typeA = myInput2.val();
  let ageA = myInput3.val();
  let newAnimal = new Animals(nameA, typeA, ageA);
  animals.push(newAnimal); 
  showAnimals(animals, myUl); 
  myInput.val("");  
  myInput2.val("");
  myInput3.val("");
});
