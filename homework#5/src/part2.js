function listOfFullNames(firstNames,lastNames){
    let newArray = [];
    for(i=0; i < firstNames.length; i++){
        newArray[i] = `${+i+1}.${firstNames[i]} ${lastNames[i]}`;
    }
   return newArray 
}
let names = ["Mihajlo", "Irena", "Bisera"];
let surnames = ["Vaskov", "Gjorgjevikj", "Vaskova"];
let fullNames = console.log(listOfFullNames(names,surnames));
console.log(`The list of full names is as follows: ${listOfFullNames(names,surnames)}`);