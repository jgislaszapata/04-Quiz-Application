// Initial declarations
const landingPage = document.getElementById('landing-page');
const startButton = document.getElementById('btn-start');
const quizPage = document.getElementById('quiz-screen');
const questionBody = document.getElementById('question-area');
const choicesUl = document.getElementById('choices-ul');
const answerFeedback = document.getElementById('user-feedback');

// This array contains each question, their responses, and the correct answer
let userScore = 0;
let questionIndex = 0;
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
startButton.addEventListener("click", clearLandingPage);
function clearLandingPage() {
    landingPage.style.display = "none";
    console.log(`'Start Quiz' button clicked.`)
    showQuiz();

}

// Displays initial question and set of answers 
function showQuiz() {
   for (i = 0; i <quizQuestions.length -1; i++) {
    let currentQuestionBody = quizQuestions[questionIndex].question;
    questionBody.textContent = currentQuestionBody;
    let currentChoiceList = quizQuestions[questionIndex].choices[i];
    let choicesButtons = document.createElement("li");
    choicesButtons.setAttribute("type", "button");
    choicesButtons.setAttribute("class", "btn btn-primary");
    choicesButtons.setAttribute("style", "color: white; background-color: blue; width: 140px; height: 90px; padding-top: 12px; margin: 18px; border-radius: 10px; ");
    choicesUl.appendChild(choicesButtons);
    choicesButtons.textContent = currentChoiceList;
    choicesButtons.addEventListener("click", function (nextQuestion){
        questionIndex++;
    });
   
    }

   
   
}









