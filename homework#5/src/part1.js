let myH1 = document.getElementById("myTitle");
myH1.innerText = "This is new heading 1!!!!";
console.log(`My H1 text: ${myH1.innerText}`);

let myParagraphs = document.getElementsByTagName("p");
myParagraphs[0].innerText = "This is new paragraph in the first element of myParagraphs"
myParagraphs[1].innerText = "This is new paragraph in the second element of myParagraphs"
console.log(`myParagraphs' first element: ${myParagraphs[0].innerText}`);
console.log(`myParagraphs' second element: ${myParagraphs[1].innerText}`);

let myHeading1 = document.getElementsByTagName("h1")[1];
myHeading1.innerText = "This is new heading 1 for second h1"
console.log(`myHeading1' second element: ${myHeading1.innerText}`);
let nextSiblingH3 = myHeading1.nextElementSibling;
nextSiblingH3.innerText = "This is new heading 3";
console.log(`Heading3: ${nextSiblingH3.innerText}`);
