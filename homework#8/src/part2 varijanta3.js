$(document).ready(function(){
//Creating HTML elements with JQuery
    let myScript = $("script").first();
    let h1 = myScript.before("<h1>JQuery Exercise</h1>");
    h1 = $("hi").first()
    //let myDiv = myScript.before("<div id=\"myDiv\"><h3>Some h3 header</h3><input type=\"text\" placeholder=\"Write any text...\"><input type=\"text\" placeholder=\"Choose any color...\"></div>");
    let myDiv = myScript.before("<div id=\"myDiv\">");
    myDiv = $("#myDiv").first()
    let h3 = myDiv.html("<h3>Some h3 header</h3>");
    h3 = $("h3").first();
    let input1 = h3.after("<input type=\"text\" placeholder=\"Write any text...\">");
    input1 = $("input").first()
    let input2 = input1.after("<input type=\"text\" placeholder=\"Choose any color...\">");
    input2 = $("input").last();
    let myButton = input2.after("<button id=\"myButton\">Enter values and click me</button>");
    myButton = $("#myButton").first();
//Solving homework requests
    myButton.on("click", function(){ //get input1 and input2 values on click
        let input1Value = input1.val();
        console.log(input1Value);
        let input2Value = input2.val();
        console.log(input2Value);
        input1.val("");
        input2.val("");
    });
    //the h3 element is already created with JQuery - line: 9-10
    console.log(h3.text()); //before change of h3 text
    h3.text(h3.text()+ " and additional text with jquery"); //changing text of h3 via JQuery
    console.log(h3.text()); //after change of h3 text
    //creating another div where I am entering and changing its HTML content. Another div is created in order to avoid overwriting, if changes of HTML content is done on myDiv
    let anotherDiv = myDiv.after("<div id=\"anotherDiv\"><span>Paragraph1</span></br><span>Paragraph2</span></br></div>");
    anotherDiv = $("#anotherDiv");
    console.log(anotherDiv.html()); // the HTML content of div element before changes
    anotherDiv.html(anotherDiv.html() + "<span>Another span element</span>"); //adding another span element within <anotherDiv>
    console.log(anotherDiv.html()); // the HTML content of div element after changes
});