let animal={
    kind: prompt("What kind of an animal do you have?"), //"Dog" - solution for the first part of the homework
    name: prompt("What's its name?"), //"Butch" - solution for the first part of the homework
    speak: function(text){
        console.log(`"${this.kind} ${this.name} says: ${text}"`);
    }
}
animal.speak("hey bro!!!");

