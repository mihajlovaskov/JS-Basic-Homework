let myButton = document.getElementById("myButton");
let myScript = document.getElementsByTagName("script")[0];

myButton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
        response.json()
        .then(todos => {
            for (i=0; i<todos.length; i++){
                let myDiv = document.createElement("div");
                myScript.before(myDiv);
                let myBreak = document.createElement("br");
                myDiv.append(myBreak);
                let myTable = document.createElement("table");
                myTable.setAttribute("style", "border:1px solid black; width:50%;");
                myDiv.append(myTable);
                let myTr = document.createElement("tr");
                myTable.append(myTr);
                let myTd = document.createElement("td");
                myTd.setAttribute("style", "border:1px solid black; text-align:center;"); 
                myTr.append(myTd);
                myTd.innerHTML = `<b>Todo with id:</b> ${todos[i].id}`;  
                myTr = document.createElement("tr");
                myTable.append(myTr);
                myTd = document.createElement("td");
                myTd.setAttribute("style", "border:1px solid black; text-align:center;");
                myTr.append(myTd);
                myTd.innerHTML = `<b>Title of todo:</b> ${todos[i].title}`;
                myTr = document.createElement("tr");
                myTable.append(myTr);
                myTd = document.createElement("td");
                myTd.setAttribute("style", "border:1px solid black; text-align:center;");
                myTr.append(myTd);
                if(todos[i].completed==true){
                myTd.innerHTML =`<i>This todo is completed</i>`}
                else if (todos[i].completed==false){
                myTd.innerHTML = `<i>This todo is NOT completed</i>`}     
            };
        });
    })
    .catch(error=>{
        let myDiv = document.createElement("div");
        myScript.before(myDiv);
        let myP = document.createElement("p");
        myDiv.append(myP);
        myP.innerText = `There is an error`
    })
});