let scriptElement = document.getElementsByTagName("script")
let buttonElement = document.createElement("input");
scriptElement[0].before(buttonElement);
buttonElement.setAttribute("id", "myButton");
buttonElement.type = "button";
buttonElement.value = "Click me";

function btnClick(){
    alert(`Hello ${myName}!`);
}

let myName = "Mihajlo"
buttonElement.onclick = btnClick;


