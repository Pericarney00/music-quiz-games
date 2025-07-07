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

/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
    choice.addEventListener("click", () => {console.log("You clicked me")})
})


/*----------------------------- Comment Graveyard -----------------------------*/


/*-------------------------------- Functions --------------------------------*/



