var quizForm = document.querySelector("#quiz-form");
var submitBtnRef = document.querySelector("#submit-btn");

var outputBox = document.querySelector("#output-box");

const correctAnswers = ["55", "right angled", "180", "12, 16, 20", "40", "Equilateral triangle", "85", "a+b+c", "none", "3"];

function showOutput(score) {
    outputBox.innerHTML = `The score is ${score}`;
}

function calculateScore() {
    var score = 0;
    var index = 0;
    var formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === correctAnswers[index]) {
            score = score+1;
        }
        index=index+1;
    }
    showOutput(score);
}

submitBtnRef.addEventListener("click", calculateScore);