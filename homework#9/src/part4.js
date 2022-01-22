$(document).ready(function(){
    let number1 = $("#number1Input");
    let number2 = $("#number2Input");
    let number3 = $("#number3Input");
    let myDiv = $("#myDiv");
    let num1="";
    let num2="";
    let num3=""
  myDiv.on("input",function(){
        num1=number1.val();
        num2=number2.val();
        num3=number3.val();
        average=num1/3+num2/3+num3/3
        $("h1").remove();
        let myH1 = myDiv.after("<h1 id=\"myH1\"></h1>");
        myH1 = $("#myH1");
        if (isNaN(num1)==true || isNaN(num2)==true || isNaN(num3)==true){
            myH1.text("Please enter numbers").css("color","black").css("background-color","red");
        }
        else if(average>=10){
        myH1.text(`${average.toFixed(2)}`).css("color","green");}
        else{
            myH1.text(`${average.toFixed(2)}`).css("color","red");
        }; 
    });
});     
