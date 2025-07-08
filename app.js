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
    imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE4nqeaO3VhdOVG0AuxHfRlS4ZS6GNsERz9xzy3USDqO_EJaJLGHAapp1PyZ9r6HhIHYUe_C5tx6N7ZH4jzEQ48pnfXykkDSTXBBNnUDCBIF840DdE8DUll05Xj4274o3YwbQ-mhdElMoH/s640/shinee.jpg",
    possibleAnswers: ["BTOB", "IKON", "NCT", "SHINee"],
    correctAnswer: "SHINee",
    },
];

const quiz1Key = []
const maxIdxPosition = 10
/*---------------------------- Variables (state) ----------------------------*/
let total = 0
let idxpostion = 0

/*------------------------ Cached Element References ------------------------*/

const questionEl = document.querySelector("#question")
let choiceBtnEl = document.querySelectorAll(".choice")
let answerEl = document.querySelector("#answer")
let imgUrlEl = document.querySelector("img")






const choiceBtn1El = document.querySelector("#b1");
const choiceBtn2El = document.querySelector("#b2");
const choiceBtn3El = document.querySelector("#b3");
const choiceBtn4El = document.querySelector("#b4");
const nextQBtnEl = document.querySelector("#b5");
/*-------------------------------- Functions --------------------------------*/

const checkScore = (event) => {
    if (event.target.innerText === quiz1Questions[idxpostion].correctAnswer) {
        total = total + 1;
        console.log("Correct")
        answerEl.textContent = `You are correct. Your score is ${total} /10`
    } 
    if (event.target.innerText !== quiz1Questions[idxpostion].correctAnswer) {
        answerEl.textContent = `Sorry, wrong. Your score is ${total} /10`;
    }  
}

const nextQuestion = (event) => {
    if (idxpostion <= maxIdxPosition) {
        idxpostion = idxpostion + 1
    }
    updateQuestions(idxpostion)
}

const updateQuestions = (idx) => {
    let questions = quiz1Questions[idx];

    questionEl.textContent = questions.question;
    
    choiceBtn1El.textContent = questions.possibleAnswers[0];
    
    imgUrlEl.src = questions.imgUrl;

    choiceBtn2El.textContent = questions.possibleAnswers[1];

    choiceBtn3El.textContent = questions.possibleAnswers[2];

    choiceBtn4El.textContent = questions.possibleAnswers[3];

}
updateQuestions(0)
/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
    choice.addEventListener("click", checkScore)
})

nextQBtnEl.addEventListener("click", nextQuestion)

/*----------------------------- Comment Graveyard -----------------------------*/
//if possible answer === correct answer then total = total + 1



 // console.log(quiz1Questions[0].correctAnswer)