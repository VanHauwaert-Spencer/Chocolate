function newParagraph() {

// Create a header
var elementH = document.createElement("h2");
var main = document.getElementById("main");
main.appendChild(elementH);
var text = document.createTextNode("Refining the Chocolate");
elementH.appendChild(text);

// Create a paragraph
var element = document.createElement("p");
 
main.appendChild(element);
 
var text = document.createTextNode("The liquid chocolate is then sent through a refiner were all the gritty particles are crushed so the chocolate becomes a smooth delicious fluid.");
 
element.appendChild(text);
 
}

function removeSection() {

var elementH = document.getElementsByTagName("h2")[2];
var parent = elementH.parentNode;
parent.removeChild(elementH);

var elementP = document.getElementsByTagName("p")[4];
parent.removeChild(elementP);
}