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
    myDiv.html(myDiv.html() + "<span>My span element</span>");
    console.log(myDiv.html());
});