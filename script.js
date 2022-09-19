var codequiz = document.getElementById("codequiz");
var startbtn = document.getElementById("Start");
var questionsConainer = document.querySelector(".questionsContainer");
var questionText = document.querySelector("#questionText");
var answersContainer = document.querySelector("#answersContainer");
var finalContainer = document.querySelector(".finalContainer");
var messageContainer = document.querySelector("#messageContainer");
var timer = 30
var myTimer;
var rightAnswer = ""
var userAnswer = ""
let highscore = 0


const quizQuestions = [{
    title: " Which of the following is correct about features of JavaScript?",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
},
{
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
},
{
    title: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
    choices: ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"],
    answer: "toFixed() "
},
{
    title: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
    choices: ["toSource()", "valueOf()", "toString()", "None of them"],
    answer: "toSource() "
},
{
    title: "Arrays in JavaScript can be used to store:---",
    choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
    answer : "all of the above"    
},
{
    title: "String values must be enclosed within --- when being assigned to variables ",
    choices: ["commas","curly brackets","quotes","parentheses"],
    answer : "quotes"    
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
    choices: ["JavaScript","terminal/bash","alerts", "console.log"],
    answer : "console.log"    
}];

questionsConainer.style.display = "none";
finalContainer.style.display = "none";
var questionNumber = 0
startbtn.addEventListener("click", startGame)
function startTimer() {
    timer--
    document.getElementById("timer").textContent = `Time: ${timer}`;
    if (timer < 1) {
        clearInterval(myTimer)
         gameOver();
    }
    console.log(timer)
}

function startGame(e) {
    e.preventDefault()
    codequiz.style.display = "none";

    questionsConainer.style.display = "block"

    myTimer = setInterval(startTimer, 1000)
    displayQuestion()
}
function displayQuestion() {
    if (questionNumber < quizQuestions.length) {
        rightAnswer = quizQuestions[questionNumber].answer
        questionText.innerText = quizQuestions[questionNumber].title
        console.log(questionNumber)
        var choices = quizQuestions[questionNumber].choices
        for (let i = 0; i < choices.length; i++) {

            var answerButton = document.createElement("button")
            answerButton.setAttribute("class", "answer")
            answerButton.textContent = choices[i];
            answersContainer.append(answerButton)

        }

    } else {
        highscore = timer
         gameOver()


    }

    // // reach into the html and grab the button
     var theButtonEl = document.querySelector('#start');
    // // add the event listern to the button
    theButtonEl.addEventListener('click', function(e) {
    })
    //     // alert or something
    // })

    document.addEventListener("click", function (e) {

        // find out if we clicked a button
        // if we clicked a button
        if (e.target && e.target.tagName === 'BUTTON' && e.target.id !== 'Start') {
            // -- do the stuff
            //check if clicked button has class of "answer"
            console.dir(e.target);
            // if i have a target and that target have a class of answer
            userAnswer = e.target.textContent;
            console.log(rightAnswer)
            console.log(userAnswer)
            if (rightAnswer === userAnswer) {
                // do what you want when ther is the correct answer
                // display correct
                answersContainer.textContent = "Correct"

            } else {
                timer -= 10
                messageContainer.textContent = "False"

            }

            questionNumber++
            // put the next question on the screen
            // if the next question is less than all the
            // pop the right ans etc etc
            //displayQuestion()
            //setTimeout(() => {
               //questionText.innerHTML = ""
              // answersContainer = ""
               // displayQuestion(quizQuestions)
            // }, 500);
             
        }
    });

    var finalContainer = document.querySelectorAll('.answer');
    var userAnswer = '';
    var numberCorrect = 0;
    for(var i=0; i<questionNumber.length; i++){
        userAnswer = (answersContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){ 
            numCorrect++;
            answersContainer[i].style.color = 'lightgreen';
        }
            else{
                answerContainers[i].style.color = 'red';
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
}
function gameOver() {
    clearInterval(myTimer)
    alert("gameOver")

}