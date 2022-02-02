$(document).ready(function(){
    let myInput = $("#task");
    let myButton = $("#myButton");
    let myUL = $("#menu")
    let input=[];
    let myCheckArray=[];
    myButton.on("click", function(){
        input.push(myInput.val());
        myInputArray = input;
        console.log(myInputArray);
        myCheckArray.push("NOTcompleted")
        console.log(myCheckArray)
        myUL.append("<li></li>");
        let myLi = $("li").last();
        myLi.append(`<input class="unchecked" id="${myInputArray.length}" type="checkbox"><span>${myInput.val()}</span>`)
        let mySpan = $("span")
        let myCheckbox = $(`.unchecked#${myInputArray.length}`);
        function Todo(myInputArray, myCheckArray) {
            this.myInputArray=myInputArray
            this.myCheckArray=myCheckArray
            }
        let todoObject = new Todo(myInputArray, myCheckArray);
        console.log(todoObject);
        $(`.unchecked#${myInputArray.length}`).on("input", function(){
            for (i=0;i<myInputArray.length;i++){   
                $("span").eq(i).css("text-decoration-line", "line-through");
                $(`.unchecked`).eq(i).attr("class", "checked");
                $(`.checked`).prop("checked", true);
            }
            for (i=0;i<myLi.length;i++){
                if(myCheckbox.hasClass("checked")==true){
                    myCheckArray.splice(i-1,1,"completed")}
                console.log(myCheckArray)
                }
            console.log(todoObject);               
            })
            myInput.val("")           
    })     
})