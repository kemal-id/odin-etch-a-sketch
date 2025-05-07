const containerDiv = document.querySelector(".container");
const squareDiv = document.createElement("div");
squareDiv.className = "square-div";

let squareCount = 20;
let squareTotal = 0;

while (squareTotal < squareCount * squareCount) {
  let clonedNode = squareDiv.cloneNode();
  containerDiv.appendChild(clonedNode);
  squareTotal++;
}

const squares = document.querySelectorAll(".square-div");
console.log(squares);
squares.forEach(element => {
  element.setAttribute("style", `flex: 0 0 ${100 / squareCount}%; height: ${100 / squareCount}vh`);
});