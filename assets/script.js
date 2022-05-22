// Initial declarations
const landingPage = document.getElementById('landing-page');
const startButton = document.getElementById('btn-start');
const quizPage = document.getElementById('quiz-screen');
const questionBody = document.getElementById('question-area');
const choiceButtons = document.getElementById('choice-btns');
const answerFeedback = document.getElementById('user-feedback');

// This array contains each question, their responses, and the correct answer
const quizQuestions = [
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
// The following three lines will erase the landing page
startButton.addEventListener("click", clearLanding);
function clearLanding() {
    landingPage.style.display = "none";
    console.log(`'Start Quiz' button clicked.`)
}
