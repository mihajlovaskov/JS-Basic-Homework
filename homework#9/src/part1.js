$(document).ready(function(){
    let myButton = $("#myButton");
    let myInput = $("#myInput");
    let myDiv = $("div").first();
    myButton.on("click", function(){
        $("h1").remove()
        let myH1 = myDiv.before("<h1 id=\"myH1\"></h1>");
        myH1 = $("#myH1");
        myH1.text(`Hello there ${myInput.val()}`);
        myInput.val("")
    });
});