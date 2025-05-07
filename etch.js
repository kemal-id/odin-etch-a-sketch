const containerDiv = document.querySelector(".container");
const squareDiv = document.createElement("div");
squareDiv.className = "square-div";

let squareCount = 16;
let squareTotal = 0;

while (squareTotal < squareCount * squareCount) {
  let clonedNode = squareDiv.cloneNode();
  containerDiv.appendChild(clonedNode);
  squareTotal++;
}
