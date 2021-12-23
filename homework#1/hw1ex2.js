var r = prompt("Enter radius of circle r, in centimeters");
var pi= Math.PI;
var pR = Number(r); /*vo slednata zadaca primetiv deka parseInt gi pretvara string-ovite vo celi broevi
bez decimalni mesta, sto natamu vlijae na preciznosta ako vo slucajov izbereme r da e decimalen broj. 
na google ja najdov Number() sto mi izgleda deka pretvara string vo number so site decimalni mesta, kako i
sto sakam. */
console.log(pR);
var area = pR*pR*pi;
var length = 2*pR*pi
console.log("The area of the circle is " + area.toFixed(2),"cm2", "while the perimeter of that same circle is " + length.toFixed(2),"cm.");
