/*-------------------------------- Constants --------------------------------*/
const quiz1Questions = [
    {
    question: "What is the name of this group?",
    imgUrl: "https://thebiaslist.com/wp-content/uploads/2025/06/stray-kids-hollow.jpg",
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
let answerEl = document.querySelector("#answer")
let imgUrlEl = document.querySelector("img")

questionEl.textContent = quiz1Questions[0].question


imgUrlEl.src = quiz1Questions[0].imgUrl


const choiceBtn1El = document.querySelector("#b1")
choiceBtn1El.textContent = quiz1Questions[0].possibleAnswers[0];

const choiceBtn2El = document.querySelector("#b2");
choiceBtn2El.textContent = quiz1Questions[0].possibleAnswers[1];

const choiceBtn3El = document.querySelector("#b3");
choiceBtn3El.textContent = quiz1Questions[0].possibleAnswers[2];

const choiceBtn4El = document.querySelector("#b4");
choiceBtn4El.textContent = quiz1Questions[0].possibleAnswers[3];


/*-------------------------------- Functions --------------------------------*/

const checkScore = (event) => {
    if (event.target.innerText === quiz1Questions[0].correctAnswer) {
        total = total + 1;
        console.log("Correct")
    } answerEl.textContent = `You are correct. Your score is ${total} /10`
    if (event.target.innerText !== quiz1Questions[0].correctAnswer) {
        answerEl.textContent = `Sorry, wrong. Your score is ${total} /10`;
    }  
    }

/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
    choice.addEventListener("click", checkScore)
})

/*----------------------------- Comment Graveyard -----------------------------*/
//if possible answer === correct answer then total = total + 1



 // console.log(quiz1Questions[0].correctAnswer)