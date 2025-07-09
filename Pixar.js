
const quiz1Questions = [
  {
    question: "What song played during this scene?",
    imgUrl:
      "https://insidethemagic.net/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-1.05.39-PM.jpg",
    possibleAnswers: [
      "Un Poco Loco",
      "La Llorona",
      "Remember Me",
      "The World Es Mi Familia",
    ],
    correctAnswer: "Un Poco Loco",
    hasAnswered: false,
  },
  {
    question: "What song played during this scene?",
    imgUrl: "https://i.ytimg.com/vi/mhcTZ9ahNEQ/maxresdefault.jpg",
    possibleAnswers: ["Wall Rat", "Welcome to Gusteua's", "Le Festin", "Special Order"],
    correctAnswer: "Le Festin",
    hasAnswered: false,
  },
  {
    question: "What song played during this scene?",
    imgUrl: "https://i.ytimg.com/vi/NiRIp_2524M/maxresdefault.jpg",
    possibleAnswers: [
      "Un Poco Loco",
      "La Llorona",
      "Remember Me",
      "The World Es Mi Familia",
    ],
    correctAnswer: "Remember Me",
    hasAnswered: false,
  },
];

const maxIdxPosition = 10;
/*---------------------------- Variables (state) ----------------------------*/
let total = 0;
let idxpostion = 0;

/*------------------------ Cached Element References ------------------------*/

const questionEl = document.querySelector("#question");
let choiceBtnEl = document.querySelectorAll(".choice");
let answerEl = document.querySelector("#answer");
let imgUrlEl = document.querySelector("img");

choiceBtnEl.disabled = true;

const choiceBtn1El = document.querySelector("#b1");
const choiceBtn2El = document.querySelector("#b2");
const choiceBtn3El = document.querySelector("#b3");
const choiceBtn4El = document.querySelector("#b4");
const nextQBtnEl = document.querySelector("#b5");

/*-------------------------------- Functions --------------------------------*/

const checkScore = (event) => {
  if (
    event.target.innerText === quiz1Questions[idxpostion].correctAnswer &&
    quiz1Questions[idxpostion].hasAnswered === false
  ) {
    total = total + 1;
    console.log("Correct");
    quiz1Questions[idxpostion].hasAnswered = true;
    answerEl.textContent = `You are correct. Your score is ${total} /10`;
    choiceBtnEl.forEach((choice) => {
      choice.disabled = true;
    });
  }
  if (event.target.innerText !== quiz1Questions[idxpostion].correctAnswer) {
    total = total;
    console.log("incorrect");
    quiz1Questions[idxpostion].hasAnswered = true;
    answerEl.textContent = `Sorry, wrong. Your score is ${total} /10`;
    choiceBtnEl.forEach((choice) => {
      choice.disabled = true;
    });
  }
};

const answerReset = () => {
  answerEl.textContent = "Will you be correct?";
};

const nextQuestion = (event) => {
  if (
    idxpostion <= maxIdxPosition &&
    quiz1Questions[idxpostion].hasAnswered === true
  ) {
    idxpostion = idxpostion + 1;
  }
  updateQuestions(idxpostion);
  answerReset();
};

const updateQuestions = (idx) => {
  let questions = quiz1Questions[idx];

  questionEl.textContent = questions.question;

  choiceBtn1El.textContent = questions.possibleAnswers[0];

  imgUrlEl.src = questions.imgUrl;

  choiceBtn2El.textContent = questions.possibleAnswers[1];

  choiceBtn3El.textContent = questions.possibleAnswers[2];

  choiceBtn4El.textContent = questions.possibleAnswers[3];

  choiceBtnEl.forEach((choice) => {
    choice.disabled = false;
  });
};
updateQuestions(0);
/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
  choice.addEventListener("click", checkScore);
});

nextQBtnEl.addEventListener("click", nextQuestion);
