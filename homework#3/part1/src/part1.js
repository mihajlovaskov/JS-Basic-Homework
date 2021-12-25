let byear = ((parseInt(prompt("Enter your year of birth:")))-4)%12;
let zodiac = null;
switch(byear){
    case 0:
        zodiac = "Rat";
        break;
    case 1:
        zodiac = "Ox";
        break;
    case 2:
        zodiac = "Tiger";
        break;
    case 3:
        zodiac = "Rabbit";
        break;
    case 4:
        zodiac = "Dragon";
        break;
    case 5:
        zodiac = "Snake";
        break;
    case 6:
        zodiac = "Horse"
        break;
    case 7:
        zodiac = "Goat"
        break;
    case 8:
        zodiac = "Monkey"
        break;
    case 9:
        zodiac = "Rooster"
        break;
    case 10:
        zodiac = "Dog"
        break;
    case 11:
        zodiac = "Pig"
        break;
    default:
        console.log("Invalid value");
        break;
}
alert(`Your chinese zodiac is ${zodiac}`);