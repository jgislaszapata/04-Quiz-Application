// Initial declarations
var landingPage = document.getElementById('landing-page');
var startButton = document.getElementById('btn-start');
var quizPage = document.getElementById('quiz-screen');
var questionBody = document.getElementById('question-area');
var answerFeedback = document.getElementById('user-feedback');

//Timer declarations 
const timeRemaining = document.getElementById("time-remaining");
var secondsLeft = 60;
var timerFloor = 0;
var timePenalty = 5;

// This array contains each question, their responses, and the correct answer
var userScore = 0;
var arrayIndex = 0;
var quizQuestions = [
    {
        question: "Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "the condition of an if/else statement is enclosed within:",
        choices: ["quotes", "curly brackets", "parentheses", "numbers"],
        answer: "curly brackets"
    },
    {
        question: "Arrays in Javascript can be used to store: ",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be inclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A useful tool used during development and debugging which prints content to the debugger is: ",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
]   

// 'Start quiz' starts the countdown
startButton.addEventListener("click", function() {
    console.log('Start button clicked, begin timer');
    if (timerFloor === 0) {
        timerFloor = setInterval(function() {
            secondsLeft--;
            timeRemaining.textContent = "Time remaining:" + secondsLeft;
                if (secondsLeft <= 0) {
                    clearInterval(timeCheck);
                    gameOver();
                }
        }, 1000);
    } showQuiz(arrayIndex);
});


var choicesUl = document.createElement("ul");
choicesUl.setAttribute("id", "choices-ul")

function showQuiz(arrayIndex) {
    landingPage.style.display = "none";
    questionBody.innerHTML = "";
    choicesUl.innerHTML = "";
    for (var i = 0; i < quizQuestions.length; i++) {
        var currentQuestionBody = quizQuestions[arrayIndex].question;
        questionBody.textContent = currentQuestionBody;
        var choiceItems = quizQuestions[arrayIndex].choices;
    }

    choiceItems.forEach(function (listText) {
        var choicesList = document.createElement("li");
        choicesList.setAttribute("style", "color: white; background-color: green; width: 20%; height: 100px; font-size: 1.5em; text-align: center; padding-top: 20px; margin: 20px; border-radius: 8px;")
        choicesList.textContent = listText;
        quizPage.appendChild(choicesUl);
        choicesUl.appendChild(choicesList);
        choicesList.addEventListener("click", (answerEval));
    })
}

function answerEval(event) {
    var index = event.target;

    if (index.matches("li")) {

        var feedBackText = document.createElement("p");
        feedBackText.setAttribute("id", "feedBackText");
        if (index.textContent == quizQuestions[arrayIndex].answer) {
            feedBackText.textContent = "Correct! Great job!";
        } else {
            secondsLeft = secondsLeft - timePenalty;
            feedBackText.textContent = "Wrong! 5 seconds deducted from time";
        }

    arrayIndex++;

    if (arrayIndex >= quizQuestions.length) {
        gameOver();
        feedBackText.textContent = `Game over! your final score is ${userScore}`;
    } else {
        showQuiz(arrayIndex);
    }
    }
}

function gameOver() {
    questionBody.innerHTML = "";
    timeRemaining.style.display = "none";
    choicesUl.style.display = "none";

    var headingComplete = document.createElement("h1");
    headingComplete.textContent = `Game Over`;

    questionBody.appendChild(headingComplete);
}






