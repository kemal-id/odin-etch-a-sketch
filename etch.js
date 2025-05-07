const containerDiv = document.querySelector(".container");
const squareDiv = document.createElement("div");
squareDiv.className = "square-div";

function generateSquares(count) {
  if (containerDiv.childElementCount > 0) {
    containerDiv.textContent = "";
  }
  let squareDimension = count;
  let squareTotal = 0;
  while (squareTotal < squareDimension * squareDimension) {
    let clonedNode = squareDiv.cloneNode();
    containerDiv.appendChild(clonedNode);
    squareTotal++;
  }
  const squares = document.querySelectorAll(".square-div");
  console.log(squares);
  squares.forEach((element) => {
    element.setAttribute(
      "style",
      `flex: 0 0 ${100 / squareDimension}%; height: ${100 / squareDimension}vh`
    );
  });
}

generateSquares(10);

const button = document.createElement("button");
button.innerText = "Change number of square";
document.body.prepend(button);
button.addEventListener("click", changeSquareButtonHandler);

function changeSquareButtonHandler() {
  let input = window.prompt("How much square per row? max = 100", 16);
  if (input === "" || parseInt(input) === NaN) {
    squareCount = 16;
  } else {
    let countInput = parseInt(input);
    if (countInput > 100) {
      alert("Too much squares!");
      return;
    } else if (countInput < 0) {
      alert("How could i create squares?");
    }
    generateSquares(countInput);
  }
}
