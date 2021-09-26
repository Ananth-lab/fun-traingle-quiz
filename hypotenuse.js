var sides = document.querySelectorAll(".side-input");
var submitButRef = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if ((Number(sides[0].value)> 0 && Number(sides[1].value)) > 0) {
    hypotenuse = Math.sqrt(
      calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
    );
    outputBox.innerHTML = `The length of hypotenuse is ${hypotenuse.toFixed(
      2
    )}`;
  }
  else {
      outputBox.innerHTML = "Please check your input"
  }
}
submitButRef.addEventListener("click", calculateHypotenuse);
