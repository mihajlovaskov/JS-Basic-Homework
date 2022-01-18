//creating HTML elements with DOM
let h1 = document.createElement("h1");
let scriptElement = document.getElementsByTagName("script");
scriptElement[0].before(h1);
h1.innerText = "JQuery exercise";
let myDiv = document.createElement("div");
myDiv.setAttribute("id", "myDiv");
scriptElement[0].before(myDiv);
let h3 = document.createElement("h3");
myDiv.appendChild(h3);
h3.innerText = "Some h3 header";
let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("value", "Write any text...");
myDiv.appendChild(input1);
let input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("value", "Choose any color...");
myDiv.appendChild(input2);

//using jquery for handling of DOM created HTML elements
$(document).ready(function(){
    let firstInput = $("input").first().val();
    console.log(firstInput);
    let lastInput = $("input").last().val();
    console.log(lastInput);
    let h3Jq = $("h3");
    console.log(h3Jq.text());
    h3Jq.text(h3Jq.text()+ " and additional text with jquery");
    console.log(h3Jq.text());
    let myDiv = $("#myDiv");
    console.log(myDiv.html());
});