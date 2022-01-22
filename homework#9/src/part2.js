$(document).ready(function(){
    let textInput = $("#textInput");
    let colorInput = $("#colorInput");
    let myButton = $("#myButton");
    let myH3 = $("h3").first();
    myButton.on("click", function(){
        $("h1").remove(); 
        let myH1 = myButton.after("<h1 id=\"myH1\"></h1>");
        myH1 = $("#myH1");
        if (`${textInput.val()}`=="" || `${colorInput.val()}`==""|| CSS.supports('color', `${colorInput.val()}`)==false){
            myH1.text("");
            myH3.text("Please enter valid inputs in both fields").css("color", "black").css("background-color", "red");
        }
        else {
            myH3.text("");
            myH1.text(`${textInput.val()}`).css("color", `${colorInput.val()}`);
        }
        textInput.val("");
        colorInput.val("");
    });
});      
