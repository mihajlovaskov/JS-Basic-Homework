//VARIJANTA SO TABELA. PODOLE IMA I VARIJANTA SO PRINT, KAKO STO BARA ZADACATA. 
//MENE MI E TABELAVA POPREGLEDNA A I MI BESE PREDIZVIK DA JA IZRABOTAM
$(document).ready(function(){
    let myButton = $('#myButton');
    let myScript = $("script").first();
    myButton.click(function(){ 
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos`,
          success: function(resultTodos){
              for (let todo of resultTodos){
                  myScript.before(`<div></div>`)
                  let myDiv = $("div").last();
                  myDiv.append(`<table style="border:1px solid black; width:50%;"></table></br>`)
                  myTable = $("table").last();
                  myTable.append("<tr></tr>");
                  myTr = $("tr").last();
                  myTr.append(`<td style ="border:1px solid black; text-align:center;"><b>Todo with id:</b> ${todo.id}</td>`);
                  myTd = $("td").last();
                  myTable.append("<tr></tr>");
                  myTr = $("tr").last();
                  myTr.append(`<td style ="border:1px solid black; text-align:center;"><b>Title of todo:</b> ${todo.title}</td>`);
                  myTd = $("td").last();
                  myTable.append("<tr></tr>");
                  myTr = $("tr").last();
                  if(todo.completed==true){
                  myTr.append(`<td style ="border:1px solid black; text-align:center;"><i>This todo is completed</i></td>`)}
                  else if (todo.completed==false){
                  myTr.append(`<td style ="border:1px solid black; text-align:center;"><i>This todo is NOT completed</i></td>`)}
                  myTd = $("td").last();
              }  
          },
          error: function(error){
                  myDiv.append(`<p>There is an error</p>`);
          }
     })
 })
})
//OBICEN PRINT NA REZULATITE OD TODOS
// $(document).ready(function(){
//     let myButton = $('#myButton');
//     let myScript = $("script").first();
//     myButton.click(function(){ 
//         $.ajax({
//             url: `https://jsonplaceholder.typicode.com/todos`,
//             success: function(resultTodos){
//                 for (let todo of resultTodos){
//                     myScript.before(`<div></div>`)
//                     let myDiv = $("div").last();
//                   myDiv.append(`<h3>Todo with id:${todo.id}</h1>`);
//                    myDiv.append(`<h4>Title of todo: ${todo.title}</h3>`);
//                    if(todo.completed==true){
//                    myDiv.append(`<p>This todo is completed</p>`);}
//                    else if (todo.completed==false) {
//                    myDiv.append(`<p>This todo is NOT completed</p></br>`)}
//               }  
//           },
//           error: function(error){
//                   myDiv.append(`<p>There is an error</p>`);;
//           }
//       })
//   })
// })