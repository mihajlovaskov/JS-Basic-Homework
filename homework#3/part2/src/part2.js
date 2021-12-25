// only to call and execute the function, without return
console.log("First solution:")
function typeOfParameter(x){
    console.log(typeof(x));
}

let y; 

typeOfParameter({Banks:"Komercijalna, Stopanska", Loans:"200,500", Clients:"Retail, Corporates"}); //object
typeOfParameter(5>4); //boolean
typeOfParameter(5); //number
typeOfParameter("5"); //string
typeOfParameter(); //undefined: 1st example
typeOfParameter(y); //undefined: 2nd example

// to call, execute and return - not really necessary in this case 
//(if trainers would like to see "return" functionality embedded)
console.log("Second solution:")
function typeOfParameter1(z){
    let type1 = typeof(z);
    return type1;
}
let a = typeOfParameter1({Banks:"Komercijalna, Stopanska", Loans:"200,500", Clients:"Retail, Corporates"});
console.log(a);
let b = typeOfParameter1(5>4);
console.log(b);
let c = typeOfParameter1(5);
console.log(c);
let d = typeOfParameter1("5");
console.log(d);
let e = typeOfParameter1();
console.log(e);
let f = typeOfParameter1(y);
console.log(f);