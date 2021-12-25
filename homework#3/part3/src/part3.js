//solution for bullet no.1 & 2:
console.log("Solution for bullet no.1 & 2:")
function humanAge(x){
    let adult = x*7;
    // console.log(`Your dog's age is ${adult} years`); //it is necessary to have it if one wants 
    //to print the human age of a dog every time this function is called and executed
    return adult;
}
let jackie = humanAge(3); //functionality check and passing human age of jackie (the name of the dog) 
//as input in some variable
console.log(jackie)
let huAge = {butch:humanAge(5), spike:humanAge(6),tyke:humanAge(8)}; //passing human age of different dogs as 
//input in some object that will be used for some kind of a reserach study on dogs behavior;
console.log(huAge);

//solution for remaining bullets:
console.log("Solution for remaining bullets:") // ne sum siguren dali dobro ja sfativ zadacata 
//od ovde nadole. Sfativ deka treba da se iskoristi edna te ista funkcija za dvete presmetki, i 
//na covecka vozrast na kucinajta i na kuceska vozrast na lugjeto??? toa se obidov da napravam...
function age(z,y){ //z refers to age (human or dog) depending on the value of y, which is 1 if 
    //one wants to convert dog's age into human age or 2, if one wants to convert human age 
    //into dog's age
    if(y==1){
        let hAge = z*7;
        return hAge;
    }
    else if(y==2){
        let dAge = z/7
        return dAge;
    }
    else{
        console.log("Insert valid value for \"y\" - the second parameter in the function: 1 for conversion of dog's age into human age or 2 for conversion of human age into dog's age");    
    }
}
let check1 = age(49,2);
console.log(check1);
let check2=age(5,1);
console.log(check2)
let check3 = age(35,4);
console.log(check3);
