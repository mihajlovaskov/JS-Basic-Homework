let scriptElement = document.getElementsByTagName("script");
let divElement = document.createElement("div");
divElement.setAttribute("class", "myDiv");
scriptElement[0].before(divElement);

function table (nRow, nCol){
    let tableElement = document.createElement("table");
    tableElement.setAttribute("style", "border:1px solid black; width:50%;");
    divElement.appendChild(tableElement);
    let trElement= [];
    let tdElement =[];
    for(i=1; i < nRow+1; i++){
        trElement[i]= document.createElement("tr");
        tableElement.appendChild(trElement[i]);
        for(j=1; j < nCol+1; j++){
            tdElement[j] = document.createElement("td");
            tdElement[j].setAttribute("style", "border:1px solid black; text-align:center;");
            trElement[i].appendChild(tdElement[j]);
            tdElement[i,j].innerHTML=`Row${i},Col${j}`;

        }
   }
}
let nRows = 10;
let nColu = 5;
table (nRows, nColu);