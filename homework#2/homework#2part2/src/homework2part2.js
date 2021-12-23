let byear = ((parseInt(prompt("Enter your year of birth:")))-4)%12;
let zodiac = null;
if(byear == 0){
    zodiac = "Rat";
}
else if(byear == 1){
    zodiac = "Ox";
}
else if(byear == 2){
    zodiac = "Tiger";
}
else if(byear == 3){
    zodiac = "Rabbit";
}
else if(byear == 4){
    zodiac = "Dragon";
}
else if(byear == 5){
    zodiac = "Snake";
}
else if(byear == 6){
    zodiac = "Horse";
}
else if(byear == 7){
    zodiac = "Goat";
}
else if(byear == 8){
    zodiac = "Monkey";
}
else if(byear == 9){
    zodiac = "Rooster";
}
else if(byear == 10){
    zodiac = "Dog";
}
else {
    zodiac = "Pig";
}
alert(`Your chinese zodiac is ${zodiac}`);


