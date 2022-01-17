let divElement = document.createElement("div");
let inputTitleBook = document.createElement("input");
let inputAuthorBook = document.createElement("input");
let inputReadingStatus = document.createElement("input");
let submitButton = document.createElement("input");
inputTitleBook.setAttribute("class", "myInput");
inputAuthorBook.setAttribute("class", "myInput");
inputReadingStatus.setAttribute("class", "myInput");
submitButton.setAttribute("class", "myButton");
inputTitleBook.setAttribute("type", "text");
inputAuthorBook.setAttribute("type", "text");
inputReadingStatus.setAttribute("type", "text");
submitButton.setAttribute("type", "submit");
inputTitleBook.setAttribute("placeholder", "Book's name");
inputAuthorBook.setAttribute("placeholder", "Author's name");
inputReadingStatus.setAttribute("placeholder", "Reading status (true/false)?");
submitButton.setAttribute("value", "Submit");
let scriptElement = document.getElementsByTagName("script");
scriptElement[0].before(divElement);
divElement.appendChild(inputTitleBook);
divElement.appendChild(inputAuthorBook);
divElement.appendChild(inputReadingStatus);
divElement.appendChild(submitButton);

let reading ={
    titleBook:inputTitleBook.value, // ["The Robots of dawn", "Mockingjay: The Final Book of The Hunger Games"] solution for the first part of the homework
    authorBook:inputAuthorBook.value, // ["Isaac Asimov", "Suzanne Collins"] solution for the first part of the homework
    readingStatus:inputReadingStatus.value, //["true", "false"] solution for the first part of the homework
    checkReadingStatus: function(book, author, status){ 
        if (status.toLowerCase()=="true"){
            alert(`Already read '${book}' by ${author}.`);
        }
        else {
            alert(`You still need to read '${book}' by ${author}.`)
        }
}};
submitButton.addEventListener("click", function(){
    reading.checkReadingStatus(inputTitleBook.value, inputAuthorBook.value, inputReadingStatus.value);
    inputReadingStatus.value="";
    inputTitleBook.value="";
    inputAuthorBook.value="";
});