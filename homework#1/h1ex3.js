var phones = 30;
var priceEx = 119.95;
var tax = 0.05;
console.log("The price of 30 phones equals to USD " + phones*(priceEx+priceEx*tax), ", tax included.");
var price = prompt("Enter price of one phone in USD, no tax included");
var taxRate = prompt("Enter tax rate in %");
var noPhones = prompt("Enter number of phones");
var pPrice = Number(price); /*pri testiranje primetiv deka so parseInt string-ot go pretvara vo cel broj bez 
decimalni mesta, sto ponatamu vlijae na preciznosta vo presmetkata. 
na google ja najdov Number() sto string-ot go pretvara vo number so site decimalni mesta, kako sto mi treba*/
var pTaxRate = Number(taxRate);
var pNoPhones = Number(noPhones);
var totalPrice = (pPrice+pPrice*(pTaxRate/100))*pNoPhones;
console.log("The total price of " +pNoPhones, "phones amounts to USD " + totalPrice, ", tax included.");