const styleEl = document.querySelector("style");
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
  const squares = document.querySelectorAll(".square-div"); //only for logging the total squares node.
  console.log(squares);
  styleEl.textContent = `
    .square-div {
    flex: 0 0 ${100 / squareDimension}%; height: ${100 / squareDimension}vh
    }
  `;

  squares.forEach((element) => {
    let interaction = 0;
    element.addEventListener("mouseover", () => {
      let randomValue = [];
      for (let i = 0; i < 3; i++) {
        randomValue.push(Math.floor(Math.random() * 255));
      }
      element.setAttribute(
        "style",
        `background-color: rgb(${randomValue[0]}, ${randomValue[1]}, ${
          randomValue[2]
        });
        opacity: ${(10 - interaction) * 10}%`
      );
      if (interaction < 10) {
        interaction++;
      }
    });
  });
}

generateSquares(10);

const button = document.createElement("button");
button.innerText = "Change number of square";
document.body.prepend(button);
button.addEventListener("click", changeSquareButtonHandler);

function changeSquareButtonHandler() {
  let input = window.prompt("How much square per row? max = 100", 16);
  let countInput = parseInt(input);
  if (countInput < 0 || isNaN(countInput)) {
    alert("How could i create squares?");
    generateSquares(16);
    return;
  } else {
    if (countInput > 100) {
      alert("Too much squares!");
      generateSquares(16);
      return;
    }
    generateSquares(countInput);
  }
}
