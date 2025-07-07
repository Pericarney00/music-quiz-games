/*-------------------------------- Constants --------------------------------*/
const quiz1Questions = [
    {
        question:"What is the name of this group?",
        possibleAnswers: [
            "SF9",
            "Stray Kids",
            "Ateez",
            "BTS"
        ],
        correctAnswer: "Stray Kids"
    },

]

const quiz1Key = []

/*---------------------------- Variables (state) ----------------------------*/

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
/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
    choice.addEventListener("click", () => {console.log("You clicked me")})
})

/*----------------------------- Comment Graveyard -----------------------------*/


/*-------------------------------- Functions --------------------------------*/



