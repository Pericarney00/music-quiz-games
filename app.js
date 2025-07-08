/*-------------------------------- Constants --------------------------------*/
const quiz1Questions = [
  {
    question: "What is the name of this group?",
    possibleAnswers: ["SF9", "Stray Kids", "Ateez", "BTS"],
    correctAnswer: "Stray Kids",
  },
  {
    question: "What is the name of this group?",
    possibleAnswers: ["BTOB", "IKON", "NCT", "SHINee"],
    correctAnswer: "SHINee",
  },
];

const quiz1Key = []

/*---------------------------- Variables (state) ----------------------------*/
let total = 0
/*------------------------ Cached Element References ------------------------*/

const questionEl = document.querySelector("#question")
let choiceBtnEl = document.querySelectorAll(".choice")

questionEl.textContent = quiz1Questions[0].question

const choiceBtn1El = document.querySelector("#b1")
choiceBtn1El.textContent = quiz1Questions[0].possibleAnswers[0];

const choiceBtn2El = document.querySelector("#b2");
choiceBtn2El.textContent = quiz1Questions[0].possibleAnswers[1];

const choiceBtn3El = document.querySelector("#b3");
choiceBtn3El.textContent = quiz1Questions[0].possibleAnswers[2];

const choiceBtn4El = document.querySelector("#b4");
choiceBtn4El.textContent = quiz1Questions[0].possibleAnswers[3];


//if possible answer === correct answer then total = total + 1

/*----------------------------- Comment Graveyard -----------------------------*/


/*-------------------------------- Functions --------------------------------*/

const checkScore = (event) => {
    console.log(quiz1Questions[0].correctAnswer)
    if (event.target.innerText === quiz1Questions[0].correctAnswer) {
        total = total + 1;
        console.log("Correct")
    } else {
        
    }
} 

/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
    choice.addEventListener("click", checkScore)
})
